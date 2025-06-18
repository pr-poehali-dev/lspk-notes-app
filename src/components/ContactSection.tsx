import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const contacts = [
    {
      icon: "MapPin",
      title: "Адрес",
      content:
        "353740, Краснодарский край, Ленинградский район, ст.Ленинградская ул.Красная 152",
      color: "text-red-600",
    },
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (123) 456-78-90",
      color: "text-green-600",
    },
    {
      icon: "Mail",
      title: "Email",
      content: "info@lspk.edu",
      color: "text-blue-600",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      content: "Пн-Пт: 8:00-18:00",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-lg text-gray-600">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-200"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4`}
                >
                  <Icon
                    name={contact.icon as any}
                    size={24}
                    className={contact.color}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-600 text-sm">{contact.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rotating Images Banner */}
        <div className="mt-16 gradient-soft rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ЛСПК в фотографиях
            </h3>
            <p className="text-gray-600">Наша жизнь в колледже</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://cdn.poehali.dev/files/f3f13ea4-1db3-430d-80d1-30d1d258b7cc.jpg",
              "https://cdn.poehali.dev/files/649b2289-366c-4f4d-8611-a7b423e0713a.jpg",
              "https://cdn.poehali.dev/files/0251d37a-9c59-4bb6-a26d-f66b49dcccba.jpg",
              "https://cdn.poehali.dev/files/730236d3-a2fc-4733-a49b-6812aeb4d872.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl hover-scale cursor-pointer group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={src}
                  alt={`ЛСПК фото ${index + 1}`}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                    {index === 0 && "Учебный корпус"}
                    {index === 1 && "Студенческая жизнь"}
                    {index === 2 && "Мероприятия"}
                    {index === 3 && "Праздничные события"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
