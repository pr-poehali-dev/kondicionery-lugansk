import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const PHONE_PRIMARY = "+7 (999) 123-45-67";
const PHONE_SECONDARY = "+7 (999) 765-43-21";
const WHATSAPP_LINK = "https://wa.me/79991234567";
const TELEGRAM_LINK = "https://t.me/username";
const ADDRESS = "г. Москва, ул. Примерная, д. 1, офис 101";

const advantages = [
  {
    icon: "Shield",
    title: "Надёжность",
    desc: "Работаем на рынке более 10 лет. Гарантируем качество и выполняем все обязательства в срок.",
  },
  {
    icon: "Zap",
    title: "Быстро",
    desc: "Оперативный выезд и выполнение работ. Ценим ваше время — результат в кратчайшие сроки.",
  },
  {
    icon: "Users",
    title: "Опытная команда",
    desc: "Профессионалы с многолетним стажем. Каждый сотрудник — сертифицированный специалист.",
  },
  {
    icon: "BadgeCheck",
    title: "Гарантия",
    desc: "Официальная гарантия на все виды работ и используемые материалы. Работаем честно.",
  },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-golos min-h-screen bg-white overflow-x-hidden">

      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg shadow-blue-100/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center shadow-lg">
              <Icon name="Star" size={18} className="text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-brand-navy" : "text-white"}`}>
              КомпанияПро
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a
              href={`tel:${PHONE_PRIMARY.replace(/\D/g, "")}`}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:text-brand-sky ${scrolled ? "text-brand-navy" : "text-white"}`}
            >
              <Icon name="Phone" size={15} />
              {PHONE_PRIMARY}
            </a>
            <a
              href={`tel:${PHONE_SECONDARY.replace(/\D/g, "")}`}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:text-brand-sky ${scrolled ? "text-brand-navy" : "text-white"}`}
            >
              <Icon name="Phone" size={15} />
              {PHONE_SECONDARY}
            </a>
          </div>

          <a
            href={`tel:${PHONE_PRIMARY.replace(/\D/g, "")}`}
            className="md:hidden w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"
          >
            <Icon name="Phone" size={18} className="text-white" />
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-sky" />

        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-sky/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "0.8s" }} />

        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg viewBox="0 0 1440 96" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,96 L0,40 Q360,0 720,48 Q1080,96 1440,32 L1440,96 Z" fill="white" />
          </svg>
        </div>

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className={`relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-8 text-white/90 text-sm font-medium">
            <span className="w-2 h-2 bg-brand-sky rounded-full animate-pulse" />
            Более 10 лет на рынке
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            Профессиональные<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-white">
              услуги для вас
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/75 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Быстро, качественно, с гарантией. Работаем по всему городу — выезжаем в день обращения.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${PHONE_PRIMARY.replace(/\D/g, "")}`}
              className="group flex items-center gap-3 bg-white text-brand-blue font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-brand-sky/30 hover:scale-105 transition-all duration-200"
            >
              <Icon name="Phone" size={20} className="group-hover:animate-float" />
              Позвонить сейчас
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-white/25 hover:scale-105 transition-all duration-200"
            >
              <span className="text-xl">💬</span>
              WhatsApp
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8 text-white/60 text-sm">
            <span>{PHONE_PRIMARY}</span>
            <span className="hidden sm:block">·</span>
            <span>{PHONE_SECONDARY}</span>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES CARDS ── */}
      <section className="py-20 sm:py-28 bg-white px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-brand-sky font-semibold text-sm uppercase tracking-widest">Почему мы</span>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-navy mt-2">
              Наши преимущества
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white to-brand-light border border-blue-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name={adv.icon} fallback="Star" size={26} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{adv.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{adv.desc}</p>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand-sky/10 to-transparent rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-sky px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full bg-gradient-to-bl from-white to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="text-brand-sky font-semibold text-sm uppercase tracking-widest">Что мы делаем</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Наши услуги
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3 text-brand-sky">Основное направление</h3>
              <p className="text-white/85 leading-relaxed text-base">
                Мы предоставляем полный спектр профессиональных услуг в нашей сфере. Наша команда опытных специалистов готова решить задачи любой сложности — от простых заявок до комплексных проектов. Работаем с частными клиентами и организациями по всему городу, обеспечивая высокое качество на каждом этапе.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3 text-brand-sky">Как мы работаем</h3>
              <p className="text-white/85 leading-relaxed text-base">
                Принцип работы прост: вы звоните или пишете в WhatsApp, мы консультируем и согласовываем детали, специалист выезжает в удобное для вас время. Никаких скрытых платежей — только честная стоимость, озвученная заранее. Все работы выполняются строго по договору с официальной гарантией.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3 text-brand-sky">Результат</h3>
              <p className="text-white/85 leading-relaxed text-base">
                После выполнения работ мы проводим финальную проверку и сдаём объект. Если в гарантийный период возникают вопросы — наша служба поддержки работает без выходных. Более 500 довольных клиентов уже рекомендуют нас своим знакомым — присоединяйтесь!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section className="py-20 sm:py-28 bg-white px-4 sm:px-8" id="contacts">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-brand-sky font-semibold text-sm uppercase tracking-widest">Связь</span>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-navy mt-2">
              Контакты
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              <a
                href={`tel:${PHONE_PRIMARY.replace(/\D/g, "")}`}
                className="group flex items-center gap-5 bg-gradient-to-r from-brand-light to-white border border-blue-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-100/60 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <Icon name="Phone" size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1 font-medium uppercase tracking-wide">Основной телефон</p>
                  <p className="text-xl font-bold text-brand-navy">{PHONE_PRIMARY}</p>
                </div>
              </a>

              <a
                href={`tel:${PHONE_SECONDARY.replace(/\D/g, "")}`}
                className="group flex items-center gap-5 bg-gradient-to-r from-brand-light to-white border border-blue-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-100/60 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <Icon name="PhoneCall" size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1 font-medium uppercase tracking-wide">Дополнительный телефон</p>
                  <p className="text-xl font-bold text-brand-navy">{PHONE_SECONDARY}</p>
                </div>
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 bg-gradient-to-r from-green-50 to-white border border-green-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-green-100/60 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1 font-medium uppercase tracking-wide">WhatsApp</p>
                  <p className="text-xl font-bold text-green-700">Написать в WhatsApp</p>
                </div>
              </a>

              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 bg-gradient-to-r from-sky-50 to-white border border-sky-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-sky-100/60 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-2xl">✈️</span>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1 font-medium uppercase tracking-wide">Telegram</p>
                  <p className="text-xl font-bold text-sky-700">Написать в Telegram</p>
                </div>
              </a>

              <div className="flex items-center gap-5 bg-gradient-to-r from-brand-light to-white border border-blue-100 rounded-2xl p-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue flex items-center justify-center flex-shrink-0 shadow-md">
                  <Icon name="MapPin" size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1 font-medium uppercase tracking-wide">Адрес</p>
                  <p className="text-base font-semibold text-brand-navy">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl border border-blue-100 min-h-[420px] relative bg-brand-light">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.617635%2C55.755814&z=14&l=map"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                style={{ minHeight: 420 }}
                frameBorder="0"
                allowFullScreen
                title="Карта"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-brand-navy py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center">
                <Icon name="Star" size={16} className="text-white" />
              </div>
              <span className="text-white font-bold text-lg">КомпанияПро</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-white/70 text-sm">
              <a href={`tel:${PHONE_PRIMARY.replace(/\D/g, "")}`} className="flex items-center gap-2 hover:text-brand-sky transition-colors">
                <Icon name="Phone" size={14} />
                {PHONE_PRIMARY}
              </a>
              <span className="hidden sm:block text-white/30">·</span>
              <a href={`tel:${PHONE_SECONDARY.replace(/\D/g, "")}`} className="flex items-center gap-2 hover:text-brand-sky transition-colors">
                <Icon name="Phone" size={14} />
                {PHONE_SECONDARY}
              </a>
            </div>

            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} КомпанияПро. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}