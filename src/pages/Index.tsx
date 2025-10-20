import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Кабель силовой ВВГ',
      category: 'cables',
      description: 'Силовой кабель для стационарной прокладки',
      price: 'от 45',
      unit: 'м',
      inStock: true,
      image: 'https://cdn.poehali.dev/projects/3380439b-ec6a-43a5-96ef-fa174c352edb/files/d2804400-55c6-4f1c-9516-c54ddfeb38e5.jpg'
    },
    {
      id: 2,
      name: 'Автоматический выключатель',
      category: 'automation',
      description: 'Модульные автоматы 1-4P, 6-63A',
      price: 'от 180',
      unit: 'шт',
      inStock: true,
      image: 'https://cdn.poehali.dev/projects/3380439b-ec6a-43a5-96ef-fa174c352edb/files/791c7042-2138-49df-bdac-4dfba35be206.jpg'
    },
    {
      id: 3,
      name: 'Светодиодные светильники',
      category: 'lighting',
      description: 'LED-светильники промышленные',
      price: 'от 1200',
      unit: 'шт',
      inStock: true,
      image: 'https://cdn.poehali.dev/projects/3380439b-ec6a-43a5-96ef-fa174c352edb/files/d2804400-55c6-4f1c-9516-c54ddfeb38e5.jpg'
    },
    {
      id: 4,
      name: 'Распределительный щит',
      category: 'automation',
      description: 'Щиты встроенные и навесные',
      price: 'от 890',
      unit: 'шт',
      inStock: true,
      image: 'https://cdn.poehali.dev/projects/3380439b-ec6a-43a5-96ef-fa174c352edb/files/791c7042-2138-49df-bdac-4dfba35be206.jpg'
    },
    {
      id: 5,
      name: 'Кабель-канал',
      category: 'accessories',
      description: 'ПВХ короба различных размеров',
      price: 'от 25',
      unit: 'м',
      inStock: true,
      image: 'https://cdn.poehali.dev/projects/3380439b-ec6a-43a5-96ef-fa174c352edb/files/d2804400-55c6-4f1c-9516-c54ddfeb38e5.jpg'
    },
    {
      id: 6,
      name: 'Розетки и выключатели',
      category: 'accessories',
      description: 'Широкий ассортимент серий',
      price: 'от 65',
      unit: 'шт',
      inStock: true,
      image: 'https://cdn.poehali.dev/projects/3380439b-ec6a-43a5-96ef-fa174c352edb/files/791c7042-2138-49df-bdac-4dfba35be206.jpg'
    }
  ];

  const services = [
    {
      icon: 'Package',
      title: 'Оптовые поставки',
      description: 'Широкий ассортимент электротехнической продукции для оптовых покупателей'
    },
    {
      icon: 'Truck',
      title: 'Доставка',
      description: 'Организуем быструю доставку по всей России'
    },
    {
      icon: 'FileCheck',
      title: 'Сертификаты',
      description: 'Вся продукция имеет необходимые сертификаты соответствия'
    },
    {
      icon: 'Headphones',
      title: 'Консультации',
      description: 'Профессиональная помощь в подборе оборудования'
    },
    {
      icon: 'Shield',
      title: 'Гарантия',
      description: 'Официальная гарантия на всю продукцию'
    },
    {
      icon: 'TrendingDown',
      title: 'Выгодные цены',
      description: 'Конкурентные цены и гибкая система скидок'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Grid3x3' },
    { id: 'cables', name: 'Кабели и провода', icon: 'Cable' },
    { id: 'automation', name: 'Автоматика', icon: 'Zap' },
    { id: 'lighting', name: 'Освещение', icon: 'Lightbulb' },
    { id: 'accessories', name: 'Аксессуары', icon: 'Boxes' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Zap" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">АльфаЖат</h1>
                <p className="text-xs text-muted-foreground">Электротехническая продукция</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#catalog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={18} className="mr-2" />
              8 (831) 123-45-67
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-white">Оптовые поставки</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Электротехническая продукция</h2>
              <p className="text-xl text-white/90 mb-8">
                Более 5000 наименований электротехнической продукции от ведущих производителей. 
                Работаем с юридическими лицами и крупными заказчиками.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Скачать прайс
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl transform rotate-3 blur-xl"></div>
              <Card className="relative shadow-2xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                      <div className="text-sm text-muted-foreground">товаров в наличии</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">лет на рынке</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">клиентов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">поддержка</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог продукции</h2>
            <p className="text-lg text-muted-foreground">Широкий ассортимент электротехнических товаров</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className="gap-2"
              >
                <Icon name={category.icon as any} size={18} />
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Package" size={80} className="text-primary/10" />
                  </div>
                  {product.inStock && (
                    <Badge className="absolute top-4 right-4 bg-accent">В наличии</Badge>
                  )}
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-primary">
                        {product.price} ₽
                      </p>
                      <p className="text-xs text-muted-foreground">за {product.unit}</p>
                    </div>
                    <Button className="bg-accent hover:bg-accent/90">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Посмотреть весь каталог
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-lg text-muted-foreground">Почему выбирают нас</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/3380439b-ec6a-43a5-96ef-fa174c352edb/files/d2804400-55c6-4f1c-9516-c54ddfeb38e5.jpg" 
                alt="О компании" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании АльфаЖат</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Торгово-производственная компания «АльфаЖат» работает на рынке электротехнической продукции 
                с 2008 года. Мы специализируемся на оптовых поставках кабельно-проводниковой продукции, 
                автоматики, освещения и комплектующих.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Наша миссия — обеспечить клиентов качественной электротехнической продукцией по конкурентным ценам 
                с высоким уровнем сервиса. Работаем с ведущими производителями и гарантируем подлинность товара.
              </p>
              
              <Tabs defaultValue="quality" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="quality">Качество</TabsTrigger>
                  <TabsTrigger value="price">Цены</TabsTrigger>
                  <TabsTrigger value="service">Сервис</TabsTrigger>
                </TabsList>
                <TabsContent value="quality" className="mt-4">
                  <p className="text-muted-foreground">
                    Вся продукция сертифицирована и соответствует требованиям ГОСТ. 
                    Работаем только с проверенными производителями.
                  </p>
                </TabsContent>
                <TabsContent value="price" className="mt-4">
                  <p className="text-muted-foreground">
                    Прямые договоры с производителями позволяют предлагать минимальные цены. 
                    Гибкая система скидок для постоянных клиентов.
                  </p>
                </TabsContent>
                <TabsContent value="service" className="mt-4">
                  <p className="text-muted-foreground">
                    Профессиональные консультации, быстрая обработка заказов, организация доставки. 
                    Индивидуальный подход к каждому клиенту.
                  </p>
                </TabsContent>
              </Tabs>

              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Узнать больше
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку и получите коммерческое предложение в течение часа
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Форма обратной связи</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Компания / ИП</label>
                      <Input placeholder="ООО «Электромонтаж»" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Контактное лицо</label>
                        <Input placeholder="Иван Иванов" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Телефон</label>
                        <Input placeholder="+7 (999) 123-45-67" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="info@company.ru" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <Textarea placeholder="Опишите ваши потребности..." rows={4} />
                    </div>
                    <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Телефоны</h4>
                      <p className="text-muted-foreground mb-1">8 (831) 123-45-67</p>
                      <p className="text-muted-foreground">8 (800) 555-35-35 (бесплатно)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Email</h4>
                      <p className="text-muted-foreground mb-1">info@alfazhat.ru</p>
                      <p className="text-muted-foreground">sales@alfazhat.ru</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Адрес</h4>
                      <p className="text-muted-foreground">
                        603000, г. Нижний Новгород,<br />
                        ул. Студёная, д. 55
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary to-primary/90 text-white">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Режим работы</h4>
                    <div className="space-y-2 text-sm">
                      <p className="flex justify-between">
                        <span>Пн-Пт:</span>
                        <span className="font-medium">9:00 - 18:00</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Сб:</span>
                        <span className="font-medium">10:00 - 16:00</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Вс:</span>
                        <span className="font-medium">Выходной</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <Icon name="Zap" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">АльфаЖат</h3>
                  <p className="text-xs text-white/70">С 2008 года</p>
                </div>
              </div>
              <p className="text-sm text-white/80">
                Надежный поставщик электротехнической продукции для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Кабели и провода</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Автоматика</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Освещение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сертификаты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8 (831) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@alfazhat.ru
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-0.5" />
                  <span>г. Нижний Новгород,<br />ул. Студёная, 55</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60 mb-4 md:mb-0">
              © 2024 АльфаЖат. Все права защищены
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
