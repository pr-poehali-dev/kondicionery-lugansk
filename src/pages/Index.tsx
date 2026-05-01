import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const PHONE_PRIMARY = "+7 (959) 264-34-08";
const PHONE_SECONDARY = "+7 (959) 173-97-98";
const TELEGRAM_LINK = "https://t.me/username";
const MAX_LINK = "https://max.ru/username";
const ADDRESS = "г. Луганск";

const advantages = [
  {
    icon: "Wind",
    title: "Без пыли и грязи",
    desc: "Работаем профессиональным оборудованием — после монтажа убираем за собой полностью. Ваш интерьер не пострадает.",
  },
  {
    icon: "Zap",
    title: "Выезд в день звонка",
    desc: "Быстро реагируем на заявки по всему Луганску. Специалист приедет в удобное для вас время.",
  },
  {
    icon: "BadgeCheck",
    title: "Гарантия на работу",
    desc: "Официальная гарантия на монтаж и оборудование. Если что-то пойдёт не так — устраним бесплатно.",
  },
  {
    icon: "Headphones",
    title: "Бесплатная консультация",
    desc: "Поможем выбрать оптимальную модель под вашу площадь и бюджет. Без навязывания лишнего.",
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
    <div className="font-golos min-h-screen bg-white overflow-x-hidden w-full"  style={{ minWidth: 320 }}>

      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg shadow-blue-100/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 lg:h-20 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center shadow-lg">
              <Icon name="Wind" size={16} className="text-white" />
            </div>
            <span className={`text-base sm:text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-brand-navy" : "text-white"}`}>
              КлиматЛуганск
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a
              href={`tel:${PHONE_PRIMARY.replace(/\D/g, "")}`}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:text-brand-sky ${scrolled ? "text-brand-navy" : "text-white"}`}
            >
              <Icon name="Phone" size={14} />
              {PHONE_PRIMARY}
            </a>
            <a
              href={`tel:${PHONE_SECONDARY.replace(/\D/g, "")}`}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:text-brand-sky ${scrolled ? "text-brand-navy" : "text-white"}`}
            >
              <Icon name="Phone" size={14} />
              {PHONE_SECONDARY}
            </a>
          </div>

          {/* Mobile: phone button */}
          <a
            href={`tel:${PHONE_PRIMARY.replace(/\D/g, "")}`}
            className={`lg:hidden flex items-center gap-2 px-3 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${scrolled ? "bg-brand-blue text-white" : "bg-white/20 backdrop-blur text-white border border-white/30"}`}
          >
            <Icon name="Phone" size={15} className="text-white" />
            <span className="hidden sm:inline">{PHONE_PRIMARY}</span>
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-sky" />

        {/* Orbs */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-brand-sky/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg viewBox="0 0 1440 96" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,96 L0,40 Q360,0 720,48 Q1080,96 1440,32 L1440,96 Z" fill="white" />
          </svg>
        </div>

        {/* Content — two columns */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-24 sm:pb-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left — text */}
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-3 sm:px-4 py-1.5 mb-6 sm:mb-8 text-white/90 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 bg-brand-sky rounded-full animate-pulse flex-shrink-0" />
              Монтаж кондиционеров в Луганске
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 tracking-tight">
              Установка<br />кондиционеров<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-white">
                без пыли и грязи
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/75 mb-6 sm:mb-8 max-w-lg font-medium leading-relaxed">
              Профессиональное оборудование, широкий выбор моделей, гарантия на работу и бесплатная консультация.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              {[["10+", "лет опыта"], ["500+", "клиентов"], ["1 день", "монтаж"]].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-white">{val}</div>
                  <div className="text-xs text-white/55 mt-0.5 whitespace-nowrap">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <a
                href={`tel:${PHONE_PRIMARY.replace(/\D/g, "")}`}
                className="group flex items-center justify-center gap-2 sm:gap-3 bg-white text-brand-blue font-bold text-sm sm:text-base px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-200 min-w-0"
              >
                <Icon name="Phone" size={17} />
                Позвонить сейчас
              </a>
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold text-sm sm:text-base px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl hover:bg-white/25 hover:scale-105 transition-all duration-200 min-w-0"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Написать в Telegram
              </a>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6 text-white/50 text-xs sm:text-sm">
              <span>{PHONE_PRIMARY}</span>
              <span>·</span>
              <span>{PHONE_SECONDARY}</span>
            </div>
          </div>

          {/* Right — photo (hidden on small screens to avoid overflow) */}
          <div className={`relative hidden sm:block transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-brand-sky/20 rounded-3xl blur-2xl scale-95" />

            {/* Photo card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="https://cdn.poehali.dev/projects/9db84ba1-b547-4fc5-ab96-54a895c6e708/files/ac68129e-5d71-4091-be23-9248813741e0.jpg"
                alt="Мастер устанавливает кондиционер в Луганске"
                className="w-full h-[340px] sm:h-[420px] lg:h-[500px] object-cover"
                loading="eager"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5">
                <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs sm:text-sm">Гарантия на монтаж</p>
                    <p className="text-white/65 text-xs">Официальная гарантия на все работы</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── ADVANTAGES CARDS ── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-brand-sky font-semibold text-xs sm:text-sm uppercase tracking-widest">Почему выбирают нас</span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-brand-navy mt-2">
              Наши преимущества
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white to-brand-light border border-blue-100 rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center mb-4 sm:mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name={adv.icon} fallback="Star" size={22} className="text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-2">{adv.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{adv.desc}</p>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand-sky/10 to-transparent rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#f4f8ff] px-3 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-blue/8 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-brand-blue font-semibold text-xs sm:text-sm uppercase tracking-widest">Что мы делаем</span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-brand-navy mt-2">
              Наши услуги
            </h2>
            <p className="text-slate-500 mt-3 sm:mt-4 text-sm sm:text-base max-w-xl mx-auto">
              Всё необходимое для комфортного климата в вашем доме или офисе
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

            {/* Card 1 */}
            <div className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-blue-50 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center mb-5 sm:mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Icon name="Wrench" size={20} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-3 sm:mb-4">Профессиональный монтаж</h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {["Любые марки и мощности", "Без пыли и грязи — чистим за собой", "Квартиры, дома, офисы, магазины", "Профессиональное оборудование"].map((item) => (
                  <li key={item} className="flex items-start gap-2 sm:gap-2.5 text-sm text-slate-600">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={12} className="text-brand-blue" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 — featured */}
            <div className="group relative bg-gradient-to-br from-brand-navy to-brand-blue rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden sm:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-sky/10 rounded-full translate-y-10 -translate-x-10" />
              <div className="relative z-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Layers" size={20} className="text-white" />
                </div>
                <div className="inline-block bg-brand-sky/30 text-brand-sky text-xs font-semibold px-3 py-1 rounded-full mb-3">Популярно</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Широкий выбор моделей</h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {["Инверторные сплит-системы", "Мультисплит для нескольких комнат", "Настенные и кассетные модели", "Подбор под площадь и бюджет"].map((item) => (
                    <li key={item} className="flex items-start gap-2 sm:gap-2.5 text-sm text-white/80">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={12} className="text-brand-sky" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-blue-50 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center mb-5 sm:mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Icon name="BadgeCheck" size={20} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-3 sm:mb-4">Гарантия и сервис</h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {["Официальная гарантия на монтаж", "Гарантия на оборудование", "Бесплатная консультация", "Работаем только в Луганске"].map((item) => (
                  <li key={item} className="flex items-start gap-2 sm:gap-2.5 text-sm text-slate-600">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={12} className="text-brand-blue" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* CTA strip */}
          <div className="mt-6 sm:mt-10 bg-white border border-blue-100 rounded-2xl px-4 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <p className="text-brand-navy font-semibold text-base sm:text-lg text-center sm:text-left">
              Не знаете, какой кондиционер выбрать? Позвоните — подберём бесплатно.
            </p>
            <a
              href={`tel:${PHONE_PRIMARY.replace(/\D/g, "")}`}
              className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-sky text-white font-bold px-5 sm:px-6 py-3 rounded-xl hover:scale-105 transition-transform shadow-md"
            >
              <Icon name="Phone" size={17} />
              {PHONE_PRIMARY}
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white px-3 sm:px-6 lg:px-8" id="contacts">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-brand-blue font-semibold text-xs sm:text-sm uppercase tracking-widest">Луганск</span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-brand-navy mt-2">Свяжитесь с нами</h2>
            <p className="text-slate-500 mt-3 sm:mt-4 text-sm sm:text-base max-w-md mx-auto">Позвоните, напишите или посмотрите где мы работаем — ответим быстро</p>
          </div>

          {/* Top row — phones + messengers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">

            {/* Phone 1 */}
            <a href={`tel:${PHONE_PRIMARY.replace(/\D/g, "")}`}
              className="group relative bg-gradient-to-br from-brand-navy to-brand-blue rounded-2xl p-4 sm:p-6 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-6 translate-x-6" />
              <div className="relative z-10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Phone" size={16} className="text-white" />
                </div>
                <p className="text-white/55 text-xs font-medium uppercase tracking-wider mb-1">Основной</p>
                <p className="text-white font-bold text-sm sm:text-base lg:text-lg leading-tight break-all">{PHONE_PRIMARY}</p>
              </div>
            </a>

            {/* Phone 2 */}
            <a href={`tel:${PHONE_SECONDARY.replace(/\D/g, "")}`}
              className="group relative bg-gradient-to-br from-brand-blue to-brand-sky rounded-2xl p-4 sm:p-6 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-6 translate-x-6" />
              <div className="relative z-10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="PhoneCall" size={16} className="text-white" />
                </div>
                <p className="text-white/55 text-xs font-medium uppercase tracking-wider mb-1">Дополнительный</p>
                <p className="text-white font-bold text-sm sm:text-base lg:text-lg leading-tight break-all">{PHONE_SECONDARY}</p>
              </div>
            </a>

            {/* Telegram */}
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer"
              className="group relative bg-[#f0f8ff] border border-sky-100 rounded-2xl p-4 sm:p-6 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-sky-100/50 rounded-full -translate-y-4 translate-x-4" />
              <div className="relative z-10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </div>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Telegram</p>
                <p className="text-sky-700 font-bold text-sm sm:text-base">Написать</p>
                <p className="text-slate-400 text-xs mt-0.5 hidden sm:block">Отвечаем быстро</p>
              </div>
            </a>

            {/* MAX */}
            <a href={MAX_LINK} target="_blank" rel="noopener noreferrer"
              className="group relative bg-[#f7f0ff] border border-violet-100 rounded-2xl p-4 sm:p-6 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/60 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-violet-100/50 rounded-full -translate-y-4 translate-x-4" />
              <div className="relative z-10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <span className="text-white font-black text-xs">MAX</span>
                </div>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">MAX</p>
                <p className="text-violet-700 font-bold text-sm sm:text-base">Написать</p>
                <p className="text-slate-400 text-xs mt-0.5 hidden sm:block">Отвечаем быстро</p>
              </div>
            </a>
          </div>

          {/* Bottom row — address + map */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">

            {/* Address card */}
            <div className="lg:col-span-2 bg-[#f4f8ff] border border-blue-50 rounded-2xl p-5 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-navy to-brand-blue flex items-center justify-center mb-4 sm:mb-5 shadow-md">
                  <Icon name="MapPin" size={16} className="text-white" />
                </div>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Где работаем</p>
                <p className="text-brand-navy font-black text-xl sm:text-2xl mb-1">{ADDRESS}</p>
                <p className="text-slate-500 text-sm leading-relaxed mt-2 sm:mt-3">
                  Выезжаем по всему городу и пригороду. Время выезда согласовываем при звонке.
                </p>
              </div>
              <div className="mt-5 sm:mt-8 flex items-center gap-3 bg-white rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-blue-100 w-fit">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-brand-navy">Принимаем заявки сейчас</span>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg border border-blue-100 relative bg-brand-light" style={{ minHeight: 280 }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=39.338788%2C48.570763&z=13&l=map"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                style={{ minHeight: 280 }}
                frameBorder="0"
                allowFullScreen
                title="Луганск на карте"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-brand-navy py-8 sm:py-10 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center flex-shrink-0">
                <Icon name="Wind" size={15} className="text-white" />
              </div>
              <span className="text-white font-bold text-base sm:text-lg">КлиматЛуганск</span>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4 text-white/70 text-xs sm:text-sm">
              <a href={`tel:${PHONE_PRIMARY.replace(/\D/g, "")}`} className="flex items-center gap-1.5 hover:text-brand-sky transition-colors">
                <Icon name="Phone" size={13} />
                {PHONE_PRIMARY}
              </a>
              <span className="text-white/30">·</span>
              <a href={`tel:${PHONE_SECONDARY.replace(/\D/g, "")}`} className="flex items-center gap-1.5 hover:text-brand-sky transition-colors">
                <Icon name="Phone" size={13} />
                {PHONE_SECONDARY}
              </a>
            </div>

            <p className="text-white/40 text-xs sm:text-sm text-center sm:text-right">
              © {new Date().getFullYear()} КлиматЛуганск. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}