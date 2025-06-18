import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="gradient-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Добро пожаловать в
            <br />
            <span className="text-yellow-300">Заметки ЛСПК</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Организуйте свои заметки по учебе, работе и личным делам. Удобно,
            быстро, всегда под рукой! 📚
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3"
          >
            <Icon name="Plus" size={20} className="mr-2" />
            Создать заметку
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
          >
            <Icon name="Eye" size={20} className="mr-2" />
            Смотреть все
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">📝</div>
            <div className="text-lg font-semibold">Личные заметки</div>
            <div className="text-purple-200">Ваши идеи и мысли</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">🎓</div>
            <div className="text-lg font-semibold">Учебные материалы</div>
            <div className="text-purple-200">Конспекты и задания</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">💼</div>
            <div className="text-lg font-semibold">Рабочие заметки</div>
            <div className="text-purple-200">Проекты и планы</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
