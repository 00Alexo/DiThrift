import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import denimJacket from '../assets/denim-jacket.png';
import bluzaMatase from '../assets/bluza-matase.png';
import heroImage from '../assets/hero-image2.png';
import categorieBarbati from '../assets/categorie-barbati.png';
import categorieFemei from '../assets/categorie-femei.png';
import maria from '../assets/maria.png';
import { FaSearch, FaUser, FaShoppingCart, FaHeart, FaStar, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    const [email, setEmail] = useState('');
    
    const produsePopulare = [
        { id: 1, nume: 'Geacă Vintage din Denim', pret: 169.99, reducere: 219.99, categorie: 'Bărbați', rating: 4.8, imagine: denimJacket },
        { id: 2, nume: 'Bluză Elegantă din Mătase', pret: 139.50, reducere: null, categorie: 'Femei', rating: 4.6, imagine: bluzaMatase },
        { id: 3, nume: 'Adidași Casual', pret: 119.99, reducere: 189.99, categorie: 'Încălțăminte', rating: 4.9, imagine: '/images/products/sneakers.jpg' },
        { id: 4, nume: 'Geantă de Designer', pret: 289.99, reducere: 429.99, categorie: 'Accesorii', rating: 4.7, imagine: '/images/products/handbag.jpg' }
    ];
    
    const categorii = [
        { id: 1, nume: 'Femei', imagine: categorieFemei, numar: 1240 },
        { id: 2, nume: 'Bărbați', imagine: categorieBarbati, numar: 890 },
        { id: 3, nume: 'Copii', imagine: '/images/categories/kids.jpg', numar: 560 },
        { id: 4, nume: 'Accesorii', imagine: '/images/categories/accessories.jpg', numar: 350 }
    ];
    
    const testimoniale = [
        { id: 1, nume: 'Maria P.', text: 'Ce-i ala Vinted?', rating: 5, imagine: maria },
        { id: 2, nume: 'Andrei T.', text: 'Calitatea hainelor a depășit așteptările mele. Serviciu excelent și livrare rapidă.', rating: 5, imagine: '/images/testimonials/andrei.jpg' },
        { id: 3, nume: 'Sara D.', text: 'Îmi place colecția atent selectată. Este ca o vânătoare de comori, dar mult mai ușoară!', rating: 4, imagine: '/images/testimonials/elena.jpg' }
    ];
    
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        alert(`Sugi pula <3`);
        setEmail('');
    };
    
    return (
        <div className="bg-white">
            <header className="sticky top-0 z-50 bg-white shadow-md">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Logo DiThrift" className="h-10" />
                        </Link>
                        
                        <nav className="hidden md:flex space-x-8">
                            <Link to="/" className="text-black hover:text-gold font-medium">Acasă</Link>
                            <Link to="/shop" className="text-blackSoft hover:text-gold">Magazin</Link>
                            <Link to="/categories" className="text-blackSoft hover:text-gold">Categorii</Link>
                            <Link to="/about" className="text-blackSoft hover:text-gold">Despre noi</Link>
                            <Link to="/contact" className="text-blackSoft hover:text-gold">Contact</Link>
                        </nav>
                        
                        <div className="flex items-center space-x-6">
                            <div className="hidden md:flex items-center bg-grayLight rounded-full px-3 py-1.5">
                                <input type="text" placeholder="Caută..." className="bg-transparent border-none focus:outline-none text-sm w-40" />
                                <FaSearch className="text-grayDark ml-2" />
                            </div>
                            
                            <div className="flex space-x-4">
                                <Link to="/favorites" className="text-blackSoft hover:text-gold">
                                    <FaHeart />
                                </Link>
                                <Link to="/account" className="text-blackSoft hover:text-gold">
                                    <FaUser />
                                </Link>
                                <Link to="/cart" className="text-blackSoft hover:text-gold relative">
                                    <FaShoppingCart />
                                    <span className="absolute -top-2 -right-2 bg-gold text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">3</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <section className="bg-grayLight py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="text-black">Eleganță Regăsită,</span> <br />
                                <span className="text-gold">A Doua Șansă</span>
                            </h1>
                            <p className="text-grayDark text-lg mb-8">Descoperă modă de lux second-hand atent selecționată la prețuri accesibile, contribuind în același timp la un impact pozitiv asupra mediului.</p>
                            <div className="flex space-x-4">
                                <Link to="/shop" className="bg-gold hover:bg-goldDark text-white px-8 py-3 rounded-full font-medium transition duration-300">
                                    Cumpără acum
                                </Link>
                                <Link to="/how-it-works" className="border border-grayDark text-grayDark px-8 py-3 rounded-full font-medium hover:bg-grayDark hover:text-white transition duration-300">
                                    Află mai mult
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative">
                                <img src={heroImage} alt="Colecție de modă" className="rounded-lg shadow-xl" />
                                <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg">
                                    <p className="text-blackSoft text-sm font-medium">Până la</p>
                                    <p className="text-gold text-3xl font-bold">70% REDUCERE</p>
                                    <p className="text-grayDark text-xs">la articole selectate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2">Cumpără după Categorie</h2>
                    <p className="text-grayDark text-center mb-10">Explorează colecțiile noastre atent selecționate</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {categorii.map((categorie) => (
                            <Link to={`/category/${categorie.nume.toLowerCase()}`} key={categorie.id} className="group">
                                <div className="relative overflow-hidden rounded-lg">
                                    <img 
                                        src={categorie.imagine} 
                                        alt={categorie.nume} 
                                        className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                                        <h3 className="text-white text-xl font-medium">{categorie.nume}</h3>
                                        <p className="text-grayLight text-sm">{categorie.numar} articole</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-16 bg-grayLight">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2">Articole Populare</h2>
                    <p className="text-grayDark text-center mb-10">Preferatele clienților noștri</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {produsePopulare.map((produs) => (
                            <div key={produs.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                                <div className="relative pt-10">
                                    <img 
                                        src={produs.imagine} 
                                        alt={produs.nume} 
                                        className="mx-auto h-44 w-44"
                                    />
                                    <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-goldLight">
                                        <FaHeart className="text-grayDark hover:text-gold" />
                                    </div>
                                    {produs.reducere && (
                                        <div className="absolute top-2 left-2 bg-gold text-white text-xs px-2 py-1 rounded">
                                            Reducere
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-medium text-blackSoft">{produs.nume}</h3>
                                        <span className="bg-grayLight px-2 py-0.5 rounded text-xs text-grayDark">{produs.categorie}</span>
                                    </div>
                                    <div className="flex items-center mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={`${i < Math.floor(produs.rating) ? 'text-gold' : 'text-grayLight'} text-xs`} />
                                        ))}
                                        <span className="text-xs text-grayDark ml-1">{produs.rating}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-lg font-bold text-gold">{produs.pret} RON</span>
                                            {produs.reducere && (
                                                <span className="text-sm text-grayDark line-through ml-2">{produs.reducere} RON</span>
                                            )}
                                        </div>
                                        <button className="bg-blackSoft hover:bg-gold text-white p-2 rounded-full transition duration-300">
                                            <FaShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-10">
                        <Link to="/shop" className="inline-flex items-center text-[#90131] hover:text-goldDark font-medium">
                            Vezi toate produsele <FaArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
            
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2">Cum Funcționează DiThrift</h2>
                    <p className="text-grayDark text-center mb-12">Pași simpli pentru modă sustenabilă</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-goldLight w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-gold">1</span>
                            </div>
                            <h3 className="text-xl font-medium mb-3">Navighează & Alege</h3>
                            <p className="text-grayDark">Explorează colecția noastră atent selecționată de articole de lux și modă de zi cu zi pre-iubite.</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-goldLight w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-gold">2</span>
                            </div>
                            <h3 className="text-xl font-medium mb-3">Cumpără în Siguranță</h3>
                            <p className="text-grayDark">Finalizează comanda cu ușurință, știind că fiecare articol a fost verificat și autentificat cu atenție.</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-goldLight w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-gold">3</span>
                            </div>
                            <h3 className="text-xl font-medium mb-3">Bucură-te & Susține</h3>
                            <p className="text-grayDark">Primește noile tale articole preferate și alătură-te mișcării de modă circulară.</p>
                        </div>
                    </div>
                    
                    <div className="mt-12 bg-grayLight rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-2/3 mb-6 md:mb-0">
                            <h3 className="text-xl font-medium mb-2">Vrei să-ți vinzi articolele?</h3>
                            <p className="text-grayDark">Oferă hainelor tale o a doua viață și câștigă bani în timp ce contribui la moda sustenabilă.</p>
                        </div>
                        <Link to="/sell-with-us" className="bg-gold hover:bg-goldDark text-white px-6 py-3 rounded-full font-medium transition duration-300">
                            Devino Vânzător
                        </Link>
                    </div>
                </div>
            </section>
            
            <section className="py-16 bg-grayLight">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2">Ce Spun Clienții Noștri</h2>
                    <p className="text-grayDark text-center mb-12">Experiențe reale din comunitatea noastră</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimoniale.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <img src={testimonial.imagine} alt={testimonial.nume} className="w-12 h-12 rounded-full object-cover mr-4" />
                                    <div>
                                        <h4 className="font-medium">{testimonial.nume}</h4>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className={`${i < testimonial.rating ? 'text-gold' : 'text-grayLight'} text-xs`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-grayDark italic">"{testimonial.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-16 bg-blackSoft text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-3">Rămâi la Curent</h2>
                        <p className="text-grayLight mb-8">Abonează-te la newsletter pentru oferte exclusive și sfaturi despre modă sustenabilă</p>
                        
                        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Adresa ta de email"
                                className="flex-grow px-4 py-3 rounded-full bg-white text-blackSoft focus:outline-none focus:ring-2 focus:ring-gold"
                                required
                            />
                            <button type="submit" className="bg-gold hover:bg-goldDark text-white px-6 py-3 rounded-full font-medium transition duration-300">
                                Abonează-te
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            
            <footer className="bg-black text-white pt-12 pb-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <img src={logo}  alt="Logo DiThrift" className="h-8 mb-4" />
                            <p className="text-grayLight text-sm mb-4">Modă second-hand premium pentru cumpărătorul conștient.</p>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" className="text-grayLight hover:text-gold">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                                </a>
                                <a href="https://instagram.com" className="text-grayLight hover:text-gold">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.059 1.37-.059 4.04 0 2.67.01 2.986.059 4.04.045.976.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.059 4.04.059 2.67 0 2.987-.01 4.04-.059.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"></path></svg>
                                </a>
                                <a href="https://pinterest.com" className="text-grayLight hover:text-gold">
                                    <span className="sr-only">Pinterest</span>
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.33 1.781.744 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"></path></svg>
                                </a>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="text-white font-medium mb-4">Cumpără</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/category/women" className="text-grayLight hover:text-gold">Femei</Link></li>
                                <li><Link to="/category/men" className="text-grayLight hover:text-gold">Bărbați</Link></li>
                                <li><Link to="/category/kids" className="text-grayLight hover:text-gold">Copii</Link></li>
                                <li><Link to="/category/accessories" className="text-grayLight hover:text-gold">Accesorii</Link></li>
                                <li><Link to="/new-arrivals" className="text-grayLight hover:text-gold">Noutăți</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-white font-medium mb-4">Despre</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/about-us" className="text-grayLight hover:text-gold">Povestea Noastră</Link></li>
                                <li><Link to="/sustainability" className="text-grayLight hover:text-gold">Sustenabilitate</Link></li>
                                <li><Link to="/how-it-works" className="text-grayLight hover:text-gold">Cum Funcționează</Link></li>
                                <li><Link to="/blog" className="text-grayLight hover:text-gold">Blog</Link></li>
                                <li><Link to="/careers" className="text-grayLight hover:text-gold">Cariere</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-white font-medium mb-4">Servicii Clienți</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/contact" className="text-grayLight hover:text-gold">Contactează-ne</Link></li>
                                <li><Link to="/faq" className="text-grayLight hover:text-gold">Întrebări Frecvente</Link></li>
                                <li><Link to="/shipping" className="text-grayLight hover:text-gold">Livrare și Returnări</Link></li>
                                <li><Link to="/size-guide" className="text-grayLight hover:text-gold">Ghid de Mărimi</Link></li>
                                <li><Link to="/privacy-policy" className="text-grayLight hover:text-gold">Politica de Confidențialitate</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-grayDark pt-6 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-grayLight text-sm mb-4 md:mb-0">© 2025 DiThrift. Toate drepturile rezervate.</p>
                        <div className="flex space-x-6">
                            <img src="/images/payment/visa.svg" alt="Visa" className="h-7" />
                            <img src="/images/payment/mastercard.svg" alt="Mastercard" className="h-7" />
                            <img src="/images/payment/paypal.svg" alt="PayPal" className="h-7" />
                            <img src="/images/payment/apple-pay.svg" alt="Apple Pay" className="h-7" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
 
export default Home;