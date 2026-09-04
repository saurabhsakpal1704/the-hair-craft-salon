import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight, CalendarDays, ChevronDown, ChevronLeft, ChevronRight, Clock3,
  Facebook, Gem, Instagram, MapPin, Menu, MessageCircle, Phone, Play,
  Scissors, Sparkles, Star, X, Youtube
} from "lucide-react";

const PHONE = "087790 36568";
const WHATSAPP = "918779036568";
const IG = "https://www.instagram.com/thehaircraftunisexsalon_neral/";
const YOUTUBE = "https://www.youtube.com/@thehaircraftsalon7083";
const ADDRESS = "Ground Floor, Shop No. 1, Juni Bazar Peth, Opp. Dr. Lad Clinic, Neral (East), Maharashtra 410101";

type Service = { name: string; desc: string; category: string };
const services: Service[] = [
  ["Haircut","Precision cuts, trims and shape refinement.","HAIR SERVICES"],
  ["Hair Styling","Polished styling for everyday looks and occasions.","HAIR SERVICES"],
  ["Layer Cut","Layered shaping tailored to your desired finish.","HAIR SERVICES"],
  ["Hair Wash","A clean, refreshed start before your service.","HAIR SERVICES"],
  ["Hair Spa","Relaxing hair-care session focused on nourishment.","HAIR SERVICES"],
  ["Hair Colour","Professional colour services with consultation.","HAIR SERVICES"],
  ["Fashion Hair Colour","Creative colour looks selected with consultation.","HAIR SERVICES"],
  ["Highlights","Dimension and brightness through tailored highlights.","HAIR SERVICES"],
  ["Hair Treatments","Care-focused treatments for different hair needs.","HAIR SERVICES"],
  ["Facial","Professional facial care for a refreshed feel.","BEAUTY & SKIN"],
  ["HydraFacial","Hydration-focused facial service; ask for current options.","BEAUTY & SKIN"],
  ["Skin Care","Beauty treatments selected around your skin needs.","BEAUTY & SKIN"],
  ["Anti-Acne Treatments","Skin-care options for acne-prone concerns.","BEAUTY & SKIN"],
  ["Party Makeup","Event-ready makeup tailored to your look.","MAKEUP"],
  ["Engagement Makeup","Polished makeup for engagement celebrations.","MAKEUP"],
  ["Bridal Makeup","Bridal makeup with consultation and planning.","MAKEUP"],
  ["Bridal Packages","Ask the salon for current package details.","MAKEUP"],
  ["Beard Grooming","Shape, trim and finish for a clean look.","GROOMING"],
  ["Shaving","Classic grooming service with a clean finish.","GROOMING"],
  ["Hair & Beard Styling","Coordinated haircut and beard styling.","GROOMING"],
  ["Men's Grooming","Everyday grooming services for men.","GROOMING"],
  ["Eyebrow Waxing","Neat brow shaping and grooming.","HAIR REMOVAL"],
  ["Body Waxing","Body waxing services; current availability on request.","HAIR REMOVAL"],
  ["Other Waxing Services","Ask the salon for the current service list.","HAIR REMOVAL"],
  ["Manicure","Hand and nail care for a polished finish.","NAILS"],
  ["Pedicure","Foot and nail care for a refreshed finish.","NAILS"],
  ["Nail Care","Essential nail-care services.","NAILS"]
].map(([name,desc,category]) => ({name,desc,category}));

const gallery = [
  {src:"https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=82", cat:"SALON", alt:"Modern salon interior"},
  {src:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=82", cat:"HAIR", alt:"Hair styling"},
  {src:"https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=82", cat:"BEAUTY", alt:"Salon beauty treatment"},
  {src:"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=82", cat:"SALON", alt:"Salon chair and mirror"},
  {src:"https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=82", cat:"MAKEUP", alt:"Professional makeup"},
  {src:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=82", cat:"HAIR", alt:"Hair care and styling"}
];

function waMessage(data?: {name:string;phone:string;service:string;date:string;time:string;notes:string}) {
  const body = data
    ? `Hello The Hair Craft Unisex Professional Salon,\nI would like to book an appointment.\n\nName: ${data.name}\nPhone: ${data.phone}\nService: ${data.service}\nPreferred Date: ${data.date}\nPreferred Time: ${data.time}\nSpecial Request: ${data.notes || "None"}`
    : "Hello The Hair Craft Unisex Professional Salon, I would like to book an appointment.";
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
}

function isOpenNow() {
  const d = new Date();
  const day = d.getDay();
  if (day === 1) return false;
  const h = d.getHours() + d.getMinutes()/60;
  return h >= 9 && h < 21;
}

function App() {
  const [menu,setMenu] = useState(false);
  const [serviceFilter,setServiceFilter] = useState("ALL");
  const [lightbox,setLightbox] = useState<number|null>(null);
  const [booking,setBooking] = useState(false);

  useEffect(() => {
    const reveal = () => document.querySelectorAll<HTMLElement>(".reveal").forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * .88) el.classList.add("visible");
    });
    reveal(); window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  },[]);

  const filteredServices = useMemo(() => serviceFilter === "ALL" ? services : services.filter(s => s.category === serviceFilter), [serviceFilter]);
  const categories = ["ALL","HAIR SERVICES","BEAUTY & SKIN","MAKEUP","GROOMING","HAIR REMOVAL","NAILS"];
  const open = isOpenNow();

  return <div>
    <header className="nav">
      <a href="#home" className="brand" onClick={()=>setMenu(false)}>
        <span className="brand-mark">HC</span><span><b>THE HAIR CRAFT</b><small>UNISEX PROFESSIONAL SALON</small></span>
      </a>
      <nav className={menu ? "nav-links open" : "nav-links"}>
        {["home","about","services","gallery","reviews","contact"].map(x => <a key={x} href={`#${x}`} onClick={()=>setMenu(false)}>{x}</a>)}
      </nav>
      <button className="nav-book" onClick={()=>setBooking(true)}>BOOK NOW <ArrowRight size={16}/></button>
      <button className="menu-btn" aria-label="Open menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-image" />
        <div className="hero-overlay"/>
        <div className="hero-content reveal">
          <p className="eyebrow"><span/> NERAL · MAHARASHTRA <span/></p>
          <h1>Your Style.<br/><em>Your Beauty.</em><br/>Your Confidence.</h1>
          <p className="hero-copy">Professional unisex hair, beauty and grooming services in Neral — crafted around you.</p>
          <div className="hero-actions">
            <button className="btn gold" onClick={()=>setBooking(true)}><CalendarDays size={18}/> BOOK AN APPOINTMENT</button>
            <a className="btn ghost" href="#services">EXPLORE SERVICES <ArrowRight size={18}/></a>
          </div>
          <div className="hero-meta"><span><Star fill="currentColor" size={15}/> 4.9 / 5</span><i/> <span>471+ reviews</span><i/> <span>Unisex services</span></div>
        </div>
        <div className="scroll-cue">SCROLL <span/></div>
      </section>

      <section className="trust-strip">
        <div><strong>4.9</strong><span>GOOGLE RATING</span></div><div><strong>471+</strong><span>REVIEWS</span></div>
        <div><strong>UNISEX</strong><span>HAIR & BEAUTY</span></div><div><strong>PREMIUM</strong><span>CARE & SERVICE</span></div>
      </section>

      <section id="about" className="section about">
        <div className="about-photo reveal"><img src={gallery[0].src} alt={gallery[0].alt} loading="lazy"/><div className="photo-tag">THE HAIR CRAFT · NERAL</div></div>
        <div className="about-copy reveal"><p className="eyebrow dark">ABOUT THE SALON</p><h2>More than grooming.<br/><em>It’s confidence.</em></h2>
          <p>At The Hair Craft Unisex Professional Salon, we believe great grooming is about more than appearance — it's about confidence. Our salon offers professional hair, beauty and grooming services in a comfortable, welcoming environment for women, men and families.</p>
          <div className="about-points"><span><Gem/> Professional service</span><span><Sparkles/> Quality-focused experience</span><span><Scissors/> Personalized consultation</span><span><Sparkles/> Clean, welcoming environment</span></div>
          <a href="#contact" className="text-link">VISIT THE SALON <ArrowRight size={16}/></a>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="section-head reveal"><div><p className="eyebrow dark">THE MENU</p><h2>Signature <em>Services</em></h2></div><p>From precision haircuts to beauty, makeup and grooming, choose a service and book directly.</p></div>
        <div className="filters">{categories.map(c=><button className={serviceFilter===c?"active":""} key={c} onClick={()=>setServiceFilter(c)}>{c}</button>)}</div>
        <div className="service-grid">{filteredServices.map((s,i)=><article className="service-card reveal" key={s.name} style={{animationDelay:`${i*25}ms`}}><span className="service-number">{String(i+1).padStart(2,"0")}</span><Scissors size={22}/><h3>{s.name}</h3><p>{s.desc}</p><div className="service-bottom"><span>PRICE ON CONSULTATION</span><button onClick={()=>{setBooking(true);}}>BOOK <ArrowRight size={15}/></button></div></article>)}</div>
      </section>

      <section className="statement"><div className="reveal"><p className="eyebrow">THE HAIR CRAFT</p><h2>Look good.<br/><em>Feel unmistakably you.</em></h2><button className="btn gold" onClick={()=>setBooking(true)}>BOOK YOUR VISIT <ArrowRight size={17}/></button></div></section>

      <section id="gallery" className="section gallery-section">
        <div className="section-head reveal"><div><p className="eyebrow dark">THE LOOKS</p><h2>Salon <em>Gallery</em></h2></div><a href={IG} target="_blank" rel="noreferrer" className="social-link"><Instagram size={18}/> @thehaircraftunisexsalon_neral <ArrowRight size={15}/></a></div>
        <div className="gallery-grid">{gallery.map((g,i)=><button key={g.src} className={`gallery-item gi-${i}`} onClick={()=>setLightbox(i)}><img src={g.src} alt={g.alt} loading="lazy"/><span>{g.cat}</span></button>)}</div>
        <div className="instagram-card reveal"><div className="ig-icon"><Instagram/></div><div><p className="eyebrow dark">FOLLOW THE HAIR CRAFT</p><h3>@thehaircraftunisexsalon_neral</h3><p>See the salon’s latest work and updates on Instagram.</p></div><a href={IG} target="_blank" rel="noreferrer" className="btn dark-btn">FOLLOW ON INSTAGRAM <ArrowRight size={16}/></a></div>
      </section>

      <section id="reviews" className="section reviews">
        <div className="review-score reveal"><p className="eyebrow dark">CLIENT FEEDBACK</p><div className="big-score">4.9</div><div className="stars">★★★★★</div><p>Based on 471+ public ratings</p><a className="text-link" href="https://www.google.com/search?q=The+Hair+Craft+Unisex+Professional+Salon+Neral" target="_blank" rel="noreferrer">SEE MORE REVIEWS <ArrowRight size={16}/></a></div>
        <div className="review-quote reveal"><span className="quote">“</span><blockquote>Polite staff, hygienic salon and professional service. The experience and advice around hair, haircut and facial services stood out.</blockquote><p className="review-source">PUBLIC REVIEW · SUMEET · 24 MAR 2024</p><small>Review wording is presented as publicly published feedback; see the source for the full review and latest customer feedback.</small></div>
      </section>

      <section className="socials">
        <a href={IG} target="_blank" rel="noreferrer"><Instagram/><span>Instagram<small>@thehaircraftunisexsalon_neral</small></span><ArrowRight/></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook/><span>Facebook<small>The hair craft unisex salon</small></span><ArrowRight/></a>
        <a href={YOUTUBE} target="_blank" rel="noreferrer"><Youtube/><span>YouTube<small>The Hair Craft Salon</small></span><ArrowRight/></a>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-copy reveal"><p className="eyebrow dark">COME VISIT</p><h2>Find your <em>new look.</em></h2><p>Ground Floor, Shop No. 1,<br/>Juni Bazar Peth, Opp. Dr. Lad Clinic,<br/>Neral (East), Maharashtra 410101</p><div className="contact-actions"><a href="tel:+918779036568" className="btn dark-btn"><Phone size={17}/> CALL NOW</a><button className="btn gold" onClick={()=>waMessage()}><MessageCircle size={17}/> WHATSAPP</button><a className="btn outline-dark" target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir/?api=1&destination=The+Hair+Craft+Unisex+Professional+Salon+Neral">GET DIRECTIONS <MapPin size={17}/></a></div></div>
        <div className="hours reveal"><div className="status">{open ? <><span className="dot"/> OPEN NOW</> : <>CLOSED TODAY</>} </div><h3>Opening Hours</h3><div className="hours-list"><span>Monday<b>Closed</b></span><span>Tuesday–Sunday<b>9:00 AM – 9:00 PM</b></span></div><div className="phone-line"><Phone size={17}/><a href="tel:+918779036568">{PHONE}</a></div></div>
      </section>
    </main>

    <footer><div className="footer-brand"><span className="brand-mark">HC</span><div><b>THE HAIR CRAFT</b><small>UNISEX PROFESSIONAL SALON</small></div></div><p>Neral, Maharashtra · 410101</p><div className="footer-links"><a href="#home">Home</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></div><div className="footer-social"><a href={IG} target="_blank" rel="noreferrer"><Instagram/></a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook/></a><a href={YOUTUBE} target="_blank" rel="noreferrer"><Youtube/></a></div><div className="copyright">© 2026 The Hair Craft Unisex Professional Salon. All rights reserved.</div></footer>

    <div className="mobile-bar"><a href="tel:+918779036568"><Phone size={18}/>CALL</a><button onClick={()=>waMessage()}><MessageCircle size={18}/>WHATSAPP</button><button onClick={()=>setBooking(true)}><CalendarDays size={18}/>BOOK NOW</button></div>

    {booking && <BookingModal close={()=>setBooking(false)}/>}
    {lightbox !== null && <div className="lightbox" onClick={()=>setLightbox(null)}><button className="lb-close" onClick={()=>setLightbox(null)}><X/></button><button className="lb-arrow left" onClick={(e)=>{e.stopPropagation();setLightbox((lightbox-1+gallery.length)%gallery.length)}}><ChevronLeft/></button><img src={gallery[lightbox].src} alt={gallery[lightbox].alt}/><button className="lb-arrow right" onClick={(e)=>{e.stopPropagation();setLightbox((lightbox+1)%gallery.length)}}><ChevronRight/></button></div>}
  </div>
}

function BookingModal({close}:{close:()=>void}) {
  const [done,setDone] = useState(false);
  const [form,setForm] = useState({name:"",phone:"",service:"Haircut",date:"",time:"",notes:""});
  const [error,setError] = useState("");
  const submit=(e:React.FormEvent)=>{
    e.preventDefault(); setError("");
    if(!form.name.trim() || !/^[0-9+() -]{8,18}$/.test(form.phone.trim()) || !form.service || !form.date || !form.time){setError("Please complete all required fields with valid details.");return;}
    setDone(true);
    waMessage(form);
  };
  return <div className="modal-backdrop" onMouseDown={close}><div className="booking-modal" onMouseDown={e=>e.stopPropagation()}><button className="modal-close" onClick={close}><X/></button>{done ? <div className="success"><div className="success-icon"><MessageCircle/></div><h2>Appointment request ready.</h2><p>WhatsApp has been opened with your booking details. The salon must confirm availability; this website does not pretend to confirm appointments automatically.</p><a href={`tel:+918779036568`} className="btn dark-btn"><Phone size={17}/> CALL TO CONFIRM</a></div> : <><p className="eyebrow dark">BOOK YOUR VISIT</p><h2>Appointment <em>request</em></h2><p className="modal-intro">Send your preferred details to the salon on WhatsApp. No payment is collected.</p><form onSubmit={submit}><label>Full Name *<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>Phone Number *<input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="10-digit mobile number"/></label><label>Service *<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>{services.map(s=><option key={s.name}>{s.name}</option>)}</select></label><div className="two"><label>Preferred Date *<input type="date" min={new Date().toISOString().slice(0,10)} value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></label><label>Preferred Time *<input type="time" value={form.time} onChange={e=>setForm({...form,time:e.target.value})}/></label></div><label>Special Request<textarea value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} placeholder="Anything the salon should know?"/></label>{error && <div className="form-error">{error}</div>}<button className="btn gold submit" type="submit"><MessageCircle size={18}/> SEND BOOKING ON WHATSAPP</button><a className="call-book" href="tel:+918779036568"><Phone size={16}/> Prefer a call? 087790 36568</a></form></>}</div></div>
}

export default App;
