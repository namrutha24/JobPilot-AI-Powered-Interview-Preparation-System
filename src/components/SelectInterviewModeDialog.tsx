import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SelectInterviewModeDialogProps {
  open: boolean;
  onClose: () => void;
  onSelectMode: (mode: "text" | "speech") => void;
}

export function SelectInterviewModeDialog({ open, onClose, onSelectMode }: SelectInterviewModeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Interview Mode</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <Button onClick={() => onSelectMode("text")}>Text Based Interview</Button>
          <Button onClick={() => onSelectMode("speech")} variant="outline">Speech Based Interview</Button>
        </div>
        <DialogFooter className="mt-6">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
