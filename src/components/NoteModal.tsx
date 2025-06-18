import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface Note {
  id: string;
  title: string;
  content: string;
  category: "personal" | "study" | "work";
  createdAt: Date;
  updatedAt: Date;
}

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (noteData: Omit<Note, "id" | "createdAt" | "updatedAt">) => void;
  note?: Note | null;
}

const NoteModal = ({ isOpen, onClose, onSave, note }: NoteModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<"personal" | "study" | "work">(
    "personal",
  );

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setCategory(note.category);
    } else {
      setTitle("");
      setContent("");
      setCategory("personal");
    }
  }, [note, isOpen]);

  const handleSave = () => {
    if (!title.trim()) return;

    onSave({
      title: title.trim(),
      content: content.trim(),
      category,
    });

    handleClose();
  };

  const handleClose = () => {
    setTitle("");
    setContent("");
    setCategory("personal");
    onClose();
  };

  const categories = [
    {
      value: "personal",
      label: "Личное",
      icon: "User",
      color: "text-green-600",
    },
    {
      value: "study",
      label: "Учеба",
      icon: "GraduationCap",
      color: "text-blue-600",
    },
    {
      value: "work",
      label: "Работа",
      icon: "Briefcase",
      color: "text-purple-600",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl font-semibold">
            <Icon
              name={note ? "Edit" : "Plus"}
              size={24}
              className="mr-2 text-primary"
            />
            {note ? "Редактировать заметку" : "Создать заметку"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Заголовок
            </Label>
            <Input
              id="title"
              placeholder="Введите заголовок заметки..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-medium">
              Категория
            </Label>
            <Select
              value={category}
              onValueChange={(value: "personal" | "study" | "work") =>
                setCategory(value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    <div className="flex items-center">
                      <Icon
                        name={cat.icon as any}
                        size={16}
                        className={`mr-2 ${cat.color}`}
                      />
                      {cat.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Content */}
          <div className="space-y-2">
            <Label htmlFor="content" className="text-sm font-medium">
              Содержание
            </Label>
            <Textarea
              id="content"
              placeholder="Введите текст заметки..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[120px] resize-none"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-3 pt-4 border-t">
          <Button variant="outline" onClick={handleClose}>
            Отмена
          </Button>
          <Button
            onClick={handleSave}
            disabled={!title.trim()}
            className="gradient-primary text-white hover:opacity-90"
          >
            <Icon name="Save" size={16} className="mr-2" />
            {note ? "Сохранить" : "Создать"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NoteModal;
