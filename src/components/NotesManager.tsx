import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import NoteModal from "./NoteModal";

interface Note {
  id: string;
  title: string;
  content: string;
  category: "personal" | "study" | "work";
  createdAt: Date;
  updatedAt: Date;
}

const initialNotes: Note[] = [
  {
    id: "1",
    title: "Список покупок",
    content: "Молоко, хлеб, масло, сыр",
    category: "personal",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Конспект по математике",
    content: "Формулы интегрирования: ∫x dx = x²/2 + C",
    category: "study",
    createdAt: new Date("2024-01-14"),
    updatedAt: new Date("2024-01-14"),
  },
  {
    id: "3",
    title: "План проекта",
    content: "Этапы разработки веб-приложения для колледжа",
    category: "work",
    createdAt: new Date("2024-01-13"),
    updatedAt: new Date("2024-01-13"),
  },
];

const NotesManager = () => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const categories = [
    {
      id: "all",
      label: "Все заметки",
      icon: "FileText",
      color: "bg-gray-100 text-gray-800",
    },
    {
      id: "personal",
      label: "Личное",
      icon: "User",
      color: "bg-green-100 text-green-800",
    },
    {
      id: "study",
      label: "Учеба",
      icon: "GraduationCap",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "work",
      label: "Работа",
      icon: "Briefcase",
      color: "bg-purple-100 text-purple-800",
    },
  ];

  const filteredNotes = notes.filter((note) => {
    const matchesCategory =
      selectedCategory === "all" || note.category === selectedCategory;
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCreateNote = (
    noteData: Omit<Note, "id" | "createdAt" | "updatedAt">,
  ) => {
    const newNote: Note = {
      ...noteData,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setNotes([newNote, ...notes]);
  };

  const handleUpdateNote = (
    noteData: Omit<Note, "id" | "createdAt" | "updatedAt">,
  ) => {
    if (!editingNote) return;

    setNotes(
      notes.map((note) =>
        note.id === editingNote.id
          ? { ...note, ...noteData, updatedAt: new Date() }
          : note,
      ),
    );
    setEditingNote(null);
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const openEditModal = (note: Note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingNote(null);
  };

  const getCategoryInfo = (category: string) => {
    return categories.find((cat) => cat.id === category) || categories[0];
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ваши заметки
          </h2>
          <p className="text-lg text-gray-600">
            Управляйте своими заметками легко и удобно
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 space-y-4">
          {/* Search and Create */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Поиск заметок..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="gradient-primary text-white hover:opacity-90"
            >
              <Icon name="Plus" size={20} className="mr-2" />
              Создать заметку
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "gradient-primary text-white"
                    : ""
                }
              >
                <Icon name={category.icon as any} size={16} className="mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => {
            const categoryInfo = getCategoryInfo(note.category);
            return (
              <Card
                key={note.id}
                className="hover:shadow-lg transition-shadow duration-200"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {note.title}
                    </CardTitle>
                    <div className="flex space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openEditModal(note)}
                        className="h-8 w-8 p-0"
                      >
                        <Icon name="Edit" size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteNote(note.id)}
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </div>
                  <Badge className={categoryInfo.color}>
                    <Icon
                      name={categoryInfo.icon as any}
                      size={14}
                      className="mr-1"
                    />
                    {categoryInfo.label}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {note.content}
                  </p>
                  <div className="text-xs text-gray-400">
                    Обновлено: {note.updatedAt.toLocaleDateString("ru-RU")}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="FileText"
              size={64}
              className="text-gray-300 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Заметок не найдено
            </h3>
            <p className="text-gray-600 mb-4">
              {searchTerm
                ? "Попробуйте изменить поисковый запрос"
                : "Создайте свою первую заметку"}
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="gradient-primary text-white"
            >
              <Icon name="Plus" size={20} className="mr-2" />
              Создать заметку
            </Button>
          </div>
        )}

        <NoteModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={editingNote ? handleUpdateNote : handleCreateNote}
          note={editingNote}
        />
      </div>
    </section>
  );
};

export default NotesManager;
