import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Menu, X, ArrowRight, Phone, Mail, Instagram, ExternalLink, Star } from "lucide-react";

// --- 1. PRODUCT DATA ---
const PRODUCTS = [
  {
    id: "CHN-SLV-CRB-001",
    imgRef: "001",
    name: "Curb (Silver) - Round Heavy",
    category: "Silver Chains",
    metal: "Alloy - Iron",
    description: "Stylish and durable silver-toned curb chain features interlocking flat links that create a sleek and polished look.",
    image: "/1.jpg" 
  },
  {
    id: "CHN-SLV-CRB-585-002",
    imgRef: "002",
    name: "Curb 585 Signature",
    category: "Silver Chains",
    metal: "Alloy - Iron",
    description: "Elegant and stylish silver chain with a classic curb link design. High-polish finish gives it a brilliant shine.",
    image: "/2.jpg"
  },
  {
    id: "CHN-SLV-FHR-905-003",
    imgRef: "003",
    name: "Fisher 905 Link",
    category: "Silver Chains",
    metal: "Alloy - Iron",
    description: "Unique and intricate link design. Crafted from high-quality silver, ensuring durability and a polished finish.",
    image: "/3.jpg"
  },
  {
    id: "CHN-SLV-CRBLN-004",
    imgRef: "004",
    name: "Curb Line Set",
    category: "Silver Chains",
    metal: "Alloy - Iron",
    description: "Set of two silver-toned curb chains with distinct interlocking links. Uniformly shaped with a textured surface.",
    image: "/4.jpg"
  },
  {
    id: "SNKCHN-SLV-1635-005",
    imgRef: "005",
    name: "Snake 1635 Silver",
    category: "Silver Chains",
    metal: "Alloy - Iron",
    description: "Elegant and sleek silver snake chain necklace. Features a smooth, flexible design that drapes beautifully around the neck.",
    image: "/5.jpg"
  },
  {
    id: "CHN-SLV-FHR-F70-006",
    imgRef: "006",
    name: "Fisher F70 Flashy",
    category: "Silver Chains",
    metal: "Alloy - Iron",
    description: "Premium polished silver Flashy Fisher Chain. Meticulously crafted links ensure a sleek, modern look.",
    image: null
  },
  {
    id: "SNKCHN-GLD-GOAL-007",
    imgRef: "007",
    name: "1635 Golden LG",
    category: "Gold Plated",
    metal: "Alloy - Iron",
    description: "Elegant gold-plated snake chain necklace. Sleek and flexible design with a smooth, shiny finish.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "CHN-GLD-FGR-008",
    imgRef: "008",
    name: "Figaro Sachin",
    category: "Gold Plated",
    metal: "Alloy - Iron",
    description: "Premium polished gold figaro chain. Pattern of three shorter links followed by a longer one.",
    image: null
  },
  {
    id: "CHN-GLD-CRB-585-009",
    imgRef: "009",
    name: "Curb Gold 585",
    category: "Gold Plated",
    metal: "Alloy - Iron",
    description: "Timeless gold plated chain with a classic Cuban link design. Tightly interlocked links create a smooth finish.",
    image: "https://images.unsplash.com/photo-1601121141461-9d660d3b3486?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "CHN-GLD-ROPE-010",
    imgRef: "010",
    name: "Rope Chain Gold",
    category: "Gold Plated",
    metal: "Alloy - Iron",
    description: "Exquisite gold-plated rope chain necklace. Twisted rope design adds elegance and sophistication.",
    image: null
  },
  {
    id: "CHN-GLD-S-OVAL-011",
    imgRef: "011",
    name: "S Oval Gold",
    category: "Gold Plated",
    metal: "Brass",
    description: "20-inch gold-plated chain necklace. Features a sleek and elegant design with a smooth, polished finish.",
    image: null
  },
  {
    id: "CHN-GLD-ROUNDBOX-012",
    imgRef: "012",
    name: "Round Box Chain",
    category: "Gold Plated",
    metal: "Alloy - Iron",
    description: "Stylish and elegant artificial gold chain necklace. Fine, box-link design adds a touch of sophistication.",
    image: null
  },
  {
    id: "CHN-GLD-BSKT-5003-013",
    imgRef: "013",
    name: "Basket-5003",
    category: "Gold Plated",
    metal: "Alloy - Iron",
    description: "Elegant artificial gold chain featuring a twisted rope design. Luxurious appearance at an affordable price.",
    image: null
  },
  {
    id: "CHN-GLD-CRBDOT-014",
    imgRef: "014",
    name: "Curb Dot",
    category: "Gold Plated",
    metal: "Alloy - Iron",
    description: "22-inch gold chain necklace features a classic design with interlocking links. Timeless and elegant.",
    image: null
  },
  {
    id: "CHN-GLD-20m3line-015",
    imgRef: "015",
    name: "20m 3 Line Pata",
    category: "Traditional",
    metal: "Brass",
    description: "Sleek and simple design. Finely crafted with a smooth and polished finish, ensuring a comfortable fit.",
    image: null
  },
  {
    id: "CHN-GLD-FLAT-016",
    imgRef: "016",
    name: "Flat - Mohini",
    category: "Traditional",
    metal: "Brass",
    description: "Sophisticated 22-inch artificial flat chain necklace. Sleek and flat interlocking links.",
    image: null
  },
  {
    id: "CHN-GLD-RICE-017",
    imgRef: "017",
    name: "Chaawal - Rice Chain",
    category: "Traditional",
    metal: "Brass",
    description: "Exquisite 22-inch artificial chain necklace featuring delicate and elegant evenly spaced links.",
    image: null
  },
  {
    id: "CHN-GLD-3868-018",
    imgRef: "018",
    name: "Patti - 3868",
    category: "Traditional",
    metal: "Alloy - Iron",
    description: "Stunning 22-inch artificial gold-colored chain. Small, interlocking links create a sophisticated look.",
    image: null
  },
  {
    id: "CHN-SLV-ROUNDBOX-019",
    imgRef: "019",
    name: "Round Box Silver",
    category: "Silver Chains",
    metal: "Alloy - Iron",
    description: "Sleek 24-inch silver-colored chain. Elegantly crafted with small, interlocking links.",
    image: null
  },
  {
    id: "SNKCHN-GLD-GOAL-020",
    imgRef: "020",
    name: "Snake Goal Chain",
    category: "Gold Plated",
    metal: "Brass",
    description: "Elegant gold-plated snake chain. Sleek and flexible design with a smooth and shiny finish.",
    image: null
  },
  {
    id: "CHN-GLD-SHWG-021",
    imgRef: "021",
    name: "Sehwag China",
    category: "Gold Plated",
    metal: "Alloy - Iron",
    description: "Elegant 22-inch gold chain necklace. Classic curb link design with interlocking, flat, and uniform links.",
    image: null
  },
  {
    id: "CHN-GLD-IMPSACHIN-022",
    imgRef: "022",
    name: "Imported Sachin Chain",
    category: "Imported",
    metal: "Alloy - Iron",
    description: "22-inch artificial gold Figaro chain. Distinctive pattern of three small circular links followed by one elongated oval link.",
    image: null
  },
  {
    id: "CHN-GLD-IMPFGRLINE-023",
    imgRef: "023",
    name: "Imported Sachin Line",
    category: "Imported",
    metal: "Alloy - Iron",
    description: "Classic figaro line link design. Interlocking, flat, and uniform links that lay flat when worn.",
    image: null
  },
  {
    id: "CHN-GLD-IMPSACHINLW-024",
    imgRef: "024",
    name: "Imported Sachin Light",
    category: "Imported",
    metal: "Alloy - Iron",
    description: "Lightweight 22-inch artificial gold Figaro chain. Exudes sophistication and charm.",
    image: null
  },
  {
    id: "CHN-GLD-8mmBEAD-025",
    imgRef: "025",
    name: "8mm Angoor Bead",
    category: "Beaded",
    metal: "Alloy - Iron",
    description: "30-inch artificial gold bead chain. Designed with a unique pattern of textured, faceted beads.",
    image: null
  },
  {
    id: "CHN-GLD-8mmLEAF-026",
    imgRef: "026",
    name: "8mm Leaf Welcome",
    category: "Traditional",
    metal: "Alloy - Iron",
    description: "30-inch artificial welcome chain. Intricate interlocking, hexagonal-shaped links.",
    image: null
  },
  {
    id: "BRCLT-FGR-027",
    imgRef: "027",
    name: "Figaro Bracelet",
    category: "Bracelets",
    metal: "Alloy - Iron",
    description: "Elegant Figaro chain bracelet designed to add a touch of sophistication to any outfit.",
    image: null
  },
  {
    id: "SLV-BRCLT-CURB-028",
    imgRef: "028",
    name: "Curb Bracelet Silver",
    category: "Bracelets",
    metal: "Alloy - Iron",
    description: "Bold silver chain bracelet. Features large, interlocking polished links.",
    image: null
  },
  {
    id: "GLD-BRCLT-CURB-575-029",
    imgRef: "029",
    name: "575 Curb Bracelet",
    category: "Bracelets",
    metal: "Alloy - Iron",
    description: "Elegant gold-tone chain bracelet. Classic design of interlocking, polished gold links.",
    image: null
  },
  {
    id: "SLV-BRCLT-ROPE-8003",
    imgRef: "030",
    name: "8003 Rope Bracelet",
    category: "Bracelets",
    metal: "Alloy - Iron",
    description: "Sleek silver-tone rope chain bracelet. Unique twisted rope design radiates elegance.",
    image: null
  },
  {
    id: "CHN-RD-PIPE-GLD-031",
    imgRef: "031",
    name: "Red Pipe (Square)",
    category: "Modern",
    metal: "Brass",
    description: "Sophisticated modern style. Features a sleek, polished design with evenly linked segments.",
    image: null
  },
  {
    id: "CHN-BLK-PIPE-GLD-032",
    imgRef: "032",
    name: "Black Pipe (Square)",
    category: "Modern",
    metal: "Brass",
    description: "Gold-tone finish enhances its elegance. Perfect for those who appreciate a luxurious aesthetic.",
    image: null
  },
  {
    id: "CHN-BLK-DOT-033",
    imgRef: "033",
    name: "Black Dot Sequence",
    category: "Modern",
    metal: "Brass",
    description: "A subtle yet striking design featuring sequence detailing. Ideal for casual wear.",
    image: null
  }
];

// --- 2. THREE.JS BACKGROUND ---
const AnimatedBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.002);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;
    camera.position.y = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    if (mountRef.current) {
      mountRef.current.innerHTML = '';
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BufferGeometry();
    const count = 3500;
    const posArray = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const goldColor = new THREE.Color(0xFFD700);

    for(let i = 0; i < count * 3; i+=3) {
      posArray[i] = (Math.random() - 0.5) * 40;
      posArray[i+1] = (Math.random() - 0.5) * 20;
      posArray[i+2] = (Math.random() - 0.5) * 20;
      const variance = (Math.random() - 0.5) * 0.2;
      colors[i] = Math.max(0, goldColor.r + variance);
      colors[i+1] = Math.max(0, goldColor.g + variance);
      colors[i+2] = Math.max(0, goldColor.b + variance);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0002;
      particles.rotation.x += 0.0001;
      particles.rotation.x += mouseY * 0.00005;
      particles.rotation.y += mouseX * 0.00005;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-[#050505] pointer-events-none" />
  );
};

// --- 3. MAIN COMPONENT ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9); 

  const categories = ["All", ...new Set(PRODUCTS.map(p => p.category))];
  
  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  // --- LOADING IMAGES ---
  // Ensure we rely on index.css for fonts, but as a backup inject link
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // --- IMAGE FALLBACK HANDLER ---
  const handleImageError = (e) => {
    e.target.onerror = null; 
    // Fallback to a high-quality placeholder if specific file isn't found
    e.target.src = "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800";
  };

  return (
    <div className="min-h-screen text-gray-200 font-sans selection:bg-yellow-500 selection:text-black">
      <AnimatedBackground />

      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="h-10 w-10 rounded-full border border-yellow-500 overflow-hidden flex items-center justify-center bg-black shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                 {/* Try to load logo, fall back to "S" text */}
                 <img 
                   src="/WhatsApp Image 2025-09-11 at 3.22.57 PM.jpeg" 
                   alt="SMC Logo"
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                 />
                 <div className="hidden w-full h-full items-center justify-center bg-black">
                    <span className="text-yellow-500 font-serif font-bold text-xl">S</span>
                 </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent tracking-wide">
                  SHRI MAHALAXMI
                </span>
                <span className="text-[0.65rem] text-yellow-500/80 tracking-[0.2em] uppercase">Chains & Jewelry</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Catalogue', 'About', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-yellow-400 text-gray-300 px-3 py-2 text-sm font-medium tracking-widest uppercase transition-colors relative group">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-yellow-900/30">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'Catalogue', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 block px-3 py-4 text-center text-base font-medium tracking-wider uppercase border-b border-white/10 last:border-0">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center px-4">
        <div className="text-center z-10 max-w-5xl mx-auto pt-16">
          <div className="mb-6 inline-flex items-center gap-2 py-1 px-4 border border-yellow-500/30 rounded-full bg-black/40 backdrop-blur-sm animate-fade-in-up">
             <Star size={12} className="text-yellow-500 fill-yellow-500" />
             <span className="text-yellow-500 text-xs tracking-[0.2em] uppercase font-bold">Established 1995</span>
             <Star size={12} className="text-yellow-500 fill-yellow-500" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            The Art of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700">Imitation</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10">
            Crafting the finest imitation chains with the precision, weight, and radiance of pure gold. Elevate your business with our timeless masterpieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#catalogue" className="px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-black font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2 rounded-sm w-full sm:w-auto">
              View Catalogue <ArrowRight size={16} />
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/20 hover:border-yellow-500 hover:text-yellow-400 text-white font-bold uppercase tracking-widest text-sm transition-all duration-300 bg-black/40 backdrop-blur-sm rounded-sm w-full sm:w-auto">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* CATALOGUE SECTION */}
      <section id="catalogue" className="py-24 bg-gradient-to-b from-transparent via-black/80 to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Our Collection</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-8"></div>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setVisibleCount(9); }}
                  className={`px-4 py-2 text-xs uppercase tracking-widest transition-all border ${
                    activeCategory === cat 
                    ? "bg-yellow-600 text-black border-yellow-600 font-bold" 
                    : "bg-transparent text-gray-400 border-white/10 hover:border-yellow-500 hover:text-yellow-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mb-8 italic">
              * Note: For custom images, please place files (1.jpg, 2.jpg...) in your public folder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((product) => (
              <div key={product.id} className="group relative bg-zinc-900/40 border border-white/5 hover:border-yellow-600/40 transition-all duration-500 overflow-hidden flex flex-col hover:shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                {/* Image Area */}
                <div className="relative h-72 bg-gradient-to-b from-zinc-800/50 to-black/80 overflow-hidden flex items-center justify-center p-6 group-hover:bg-zinc-800/30 transition-colors">
                   <div className="absolute top-4 left-4 z-10">
                     <span className="bg-black/80 text-yellow-500 border border-yellow-500/30 text-[10px] font-bold px-2 py-1 uppercase tracking-wider backdrop-blur-sm">
                       {product.metal}
                     </span>
                   </div>

                   {/* LOGIC: Show Real Image OR Placeholder Icon with Error Handling */}
                   {product.image ? (
                     <img 
                      src={product.image} 
                      alt={product.name}
                      onError={handleImageError}
                      className="w-full h-full object-cover absolute inset-0 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                     />
                   ) : (
                     <div className="text-center opacity-60 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105">
                       <div className="w-24 h-24 border border-yellow-600/20 rounded-full mx-auto mb-4 flex items-center justify-center bg-black/20 group-hover:border-yellow-500/60 transition-all relative">
                          <div className="absolute inset-1 rounded-full border border-dashed border-white/10"></div>
                          <span className="text-4xl filter drop-shadow-lg">⛓️</span>
                       </div>
                       <p className="text-xs uppercase tracking-widest text-gray-500 font-mono group-hover:text-yellow-500/70 transition-colors">
                         ID: {product.imgRef}
                       </p>
                     </div>
                   )}
                   
                   <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/90 border-t border-white/10 flex justify-between items-center backdrop-blur-md">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">In Stock</span>
                      <button className="text-yellow-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Details &rarr;</button>
                   </div>
                </div>

                <div className="p-6 flex-1 flex flex-col border-t border-white/5 bg-black/20">
                  <div className="mb-auto">
                    <span className="text-yellow-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">{product.category}</span>
                    <h3 className="text-xl text-white font-serif mb-3 leading-tight group-hover:text-yellow-400 transition-colors">{product.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 font-light border-l-2 border-white/10 pl-3">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredProducts.length && (
            <div className="mt-16 text-center">
              <button onClick={loadMore} className="inline-block px-10 py-4 border border-white/20 text-gray-300 hover:border-yellow-500 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all uppercase tracking-widest text-sm rounded-sm">
                Load More Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-black border-t border-white/10 relative z-10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                 <div className="h-8 w-8 rounded-full border border-yellow-500 flex items-center justify-center bg-transparent">
                   <span className="text-yellow-500 font-serif font-bold text-lg">S</span>
                 </div>
                 <span className="font-serif text-xl font-bold text-white tracking-wide">SHRI MAHALAXMI CHAINS</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8 leading-relaxed font-light text-sm">
                Redefining the standards of imitation jewelry since 1995. We combine traditional artistry with modern manufacturing.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-yellow-600 hover:text-black hover:border-yellow-600 transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-yellow-600 hover:text-black hover:border-yellow-600 transition-all"><Mail size={18} /></a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-serif text-lg mb-6">Contact</h3>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li className="flex items-start gap-3"><Phone size={16} className="text-yellow-600 mt-1" /><span>+91 98765 43210</span></li>
                <li className="flex items-start gap-3"><Mail size={16} className="text-yellow-600 mt-1" /><span>sales@smchains.com</span></li>
                <li className="flex items-start gap-3"><div className="mt-1"><ExternalLink size={16} className="text-yellow-600" /></div><span>Agra, Uttar Pradesh<br/>India</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs tracking-wider">© {new Date().getFullYear()} SHRI MAHALAXMI CHAINS. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
