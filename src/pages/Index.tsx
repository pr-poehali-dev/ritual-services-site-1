import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  
  const services = [
    {
      title: 'Полный комплекс услуг',
      description: 'Организация похорон под ключ с соблюдением всех традиций',
      price: 'от 45 000 ₽',
      icon: 'Heart'
    },
    {
      title: 'Кремация',
      description: 'Кремационные услуги с достоинством и уважением',
      price: 'от 25 000 ₽',
      icon: 'Flame'
    },
    {
      title: 'Захоронения',
      description: 'Традиционное погребение на лучших кладбищах города',
      price: 'от 35 000 ₽',
      icon: 'TreePine'
    },
    {
      title: 'Перевозка усопшего',
      description: 'Деликатная транспортировка в любую точку страны',
      price: 'от 8 000 ₽',
      icon: 'Car'
    }
  ];

  const monuments = [
    {
      title: 'Гранитные памятники',
      description: 'Классические памятники из карельского гранита',
      price: 'от 35 000 ₽'
    },
    {
      title: 'Мраморные композиции',
      description: 'Изысканные памятники из натурального мрамора',
      price: 'от 55 000 ₽'
    },
    {
      title: 'Комбинированные монументы',
      description: 'Сочетание различных материалов для уникального дизайна',
      price: 'от 45 000 ₽'
    }
  ];

  const ritualGoods = [
    { name: 'Гробы деревянные', price: 'от 12 000 ₽' },
    { name: 'Гробы металлические', price: 'от 25 000 ₽' },
    { name: 'Венки траурные', price: 'от 2 500 ₽' },
    { name: 'Ритуальная одежда', price: 'от 3 000 ₽' },
    { name: 'Урны для праха', price: 'от 5 000 ₽' },
    { name: 'Церковная атрибутика', price: 'от 1 500 ₽' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Cross" size={28} className="text-primary" />
              <h1 className="text-2xl font-serif text-primary">Вечная Память</h1>
            </div>
            <Button 
              onClick={() => setIsConsultationOpen(true)}
              className="bg-primary text-primary-foreground hover:bg-secondary"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-primary mb-6">
            Достойные проводы с заботой и уважением
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Более 15 лет мы помогаем семьям организовать прощание с близкими людьми 
            с максимальной заботой и соблюдением всех традиций
          </p>
          <div className="flex justify-center space-x-6 text-primary">
            <div className="text-center">
              <Icon name="Clock" size={32} className="mx-auto mb-2" />
              <p className="text-sm">24/7</p>
            </div>
            <div className="text-center">
              <Icon name="Shield" size={32} className="mx-auto mb-2" />
              <p className="text-sm">Гарантия</p>
            </div>
            <div className="text-center">
              <Icon name="Users" size={32} className="mx-auto mb-2" />
              <p className="text-sm">Опыт 15+ лет</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-primary text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={service.icon as any} size={40} className="mx-auto text-primary mb-4" />
                  <CardTitle className="font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <p className="text-lg font-semibold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monuments */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-primary text-center mb-12">Памятники</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {monuments.map((monument, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-full h-48 bg-muted rounded-md mb-4 overflow-hidden">
                    <img 
                      src={`/img/${index === 0 ? '9a90225b-e6b8-4abd-953c-73e7da8c3307.jpg' : index === 1 ? '11689ba3-27f4-4940-9e6c-27cc980c2b8d.jpg' : '60c2ba97-cd4c-49e9-8c3d-da69880ba212.jpg'}`} 
                      alt={monument.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="font-serif">{monument.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{monument.description}</p>
                  <p className="text-lg font-semibold text-primary">{monument.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ritual Goods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-primary text-center mb-12">Ритуальные товары</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ritualGoods.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                  <span className="text-foreground">{item.name}</span>
                  <span className="text-primary font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-primary mb-6">О нас</h2>
            <p className="text-muted-foreground mb-6">
              «Вечная Память» — это семейная компания, которая более 15 лет оказывает ритуальные услуги 
              в нашем городе. Мы понимаем, насколько важно достойно проводить близких людей в последний путь, 
              поэтому подходим к каждому случаю с максимальной деликатностью и профессионализмом.
            </p>
            <p className="text-muted-foreground mb-8">
              Наша команда состоит из опытных специалистов, которые готовы взять на себя все организационные 
              вопросы и поддержать вас в трудную минуту. Мы работаем круглосуточно и гарантируем качество 
              всех оказываемых услуг.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Проведенных церемоний</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">24/7</h3>
                <p className="text-muted-foreground">Круглосуточная поддержка</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Лет опыта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-primary text-center mb-12">Контакты</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MapPin" size={20} className="mr-2" />
                    Наш адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">г. Москва, ул. Садовая, д. 15</p>
                  <p className="text-muted-foreground">м. Чистые пруды</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Телефоны
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                  <p className="text-xs text-muted-foreground mt-2">Круглосуточно, без выходных</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">info@memoria.ru</p>
                  <p className="text-muted-foreground">support@memoria.ru</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Clock" size={20} className="mr-2" />
                    Режим работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Круглосуточно</p>
                  <p className="text-muted-foreground">7 дней в неделю</p>
                  <p className="text-xs text-muted-foreground mt-2">Выездные услуги 24/7</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Online Consultation Modal */}
      {isConsultationOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Онлайн консультация
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsConsultationOpen(false)}
                >
                  <Icon name="X" size={16} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Ваше имя</label>
                <Input placeholder="Введите ваше имя" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Телефон</label>
                <Input placeholder="+7 (___) ___-__-__" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Сообщение</label>
                <Textarea 
                  placeholder="Опишите вашу ситуацию или задайте вопрос..."
                  className="mt-1 min-h-[100px]"
                />
              </div>
              <div className="flex space-x-3">
                <Button className="flex-1 bg-primary text-primary-foreground hover:bg-secondary">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsConsultationOpen(false)}
                  className="flex-1"
                >
                  Отмена
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Мы ответим в течение 15 минут
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name="Cross" size={24} />
              <h3 className="text-xl font-serif">Вечная Память</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Достойные проводы с заботой и уважением
            </p>
            <Separator className="bg-primary-foreground/20 mb-4" />
            <p className="text-xs opacity-75">
              © 2024 Вечная Память. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;