import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const contacts = [
    {
      icon: "MapPin",
      title: "Адрес",
      content: "г. Луганск, ул. Студенческая, 15",
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
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
              "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=200&fit=crop",
              "https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop",
            ].map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl hover-scale cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={src}
                  alt={`ЛСПК фото ${index + 1}`}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
