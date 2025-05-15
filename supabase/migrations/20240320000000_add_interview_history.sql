-- Create interview_history table
CREATE TABLE IF NOT EXISTS interview_history (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  answers JSONB NOT NULL,
  questions JSONB NOT NULL,
  overall_score FLOAT NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  domain TEXT NOT NULL,
  role TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add RLS policies
ALTER TABLE interview_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own interview history"
  ON interview_history
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own interview history"
  ON interview_history
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX idx_interview_history_user_id ON interview_history(user_id);

-- Add function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_interview_history_updated_at
  BEFORE UPDATE ON interview_history
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column(); 