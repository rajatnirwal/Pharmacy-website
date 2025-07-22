import logo from "./logo.png";
import hero_img from "./hero_img.png";
import hero2 from "./hero2.png";
import doctor from "./doctor.png"
import doctor2 from "./doctor2.png"
import doctor1 from "./doctor1.png"
import doctor3 from "./doctor3.png"
import hospital from "./hospital.png"
import patient from "./patient.png"
import about_h from "./about_h.jpg"
import bin from "./bin.png"

import p_1 from "./image.png";
import p_2 from "./imagecopy.png";
import p_3 from "./imagecopy2.png";
import p_4 from "./imagecopy3.png";
import p_5 from "./imagecopy4.png";
import p_6 from "./imagecopy5.png";
import p_7 from "./imagecopy6.png";
import p_8 from "./imagecopy7.png";
import p_9 from "./imagecopy8.png";
import p_10 from "./imagecopy9.png";
import p_11 from "./imagecopy10.png";
import p_12 from "./imagecopy11.png";
import p_13 from "./imagecopy12.png";
import p_14 from "./imagecopy13.png";
import p_15 from "./imagecopy14.png";
import p_16 from "./imagecopy15.png";
import p_17 from "./imagecopy16.png";
import p_18 from "./imagecopy17.png";
import p_19 from "./imagecopy18.png";
import p_20 from "./imagecopy19.png";

export const assets = {
    logo,
    hero_img,
    hero2,
    patient,
    hospital,
    doctor,
    doctor1,
    doctor2,
    doctor3,
    about_h,
    bin
}

export const products = [
    {
        _id: "pro1",
        name: "Vitamin C 500mg Tablets (60 count)",
        description: "Boosts immunity and skin health with powerful antioxidants",
        price: 299,
        image: [p_1],
        category: ["Vitamins", "Immunity Boosters"],
        date: 17176348448,
        bestseller: true
    },
    {
        _id: "pro2",
        name: "Vitamin B-Complex Capsules (30 count)",
        description: "Supports energy production and nervous system health",
        price: 189,
        image: [p_2],
        category: ["Vitamins", "Energy Boosters"],
        date: 17176348448,
        bestseller: false
    },
    {
        _id: "pro3",
        name: "Vitamin D3 1000IU Softgels (90 count)",
        description: "Essential for bone health and calcium absorption",
        price: 349,
        image: [p_3],
        category: ["Vitamins", "Bone Health"],
        date: 17176348448,
        bestseller: true
    },
    {
        _id: "pro4",
        name: "Premium Facial Tissue Box (100 sheets)",
        description: "Soft, hypoallergenic tissues for sensitive skin",
        price: 45,
        image: [p_4],
        category: ["Personal Care", "Essentials"],
        date: 17176348448,
        bestseller: false
    },
    {
        _id: "pro5",
        name: "Multivitamin for Men (60 tablets)",
        description: "Comprehensive nutrition tailored for men's health",
        price: 499,
        image: [p_5],
        category: ["Vitamins", "Men's Health"],
        date: 17176348448,
        bestseller: true
    },
    {
        _id: "pro6",
        name: "Tensonil Blood Pressure Support (60 tablets)",
        description: "Helps maintain healthy blood pressure levels",
        price: 399,
        image: [p_6],
        category: ["Heart Health", "Blood Pressure"],
        date: 17176348448,
        bestseller: false
    },
    {
        _id: "pro7",
        name: "Folic Acid 400mcg Tablets (90 count)",
        description: "Essential for pregnant women and cell growth",
        price: 129,
        image: [p_7],
        category: ["Prenatal Care", "Vitamins"],
        date: 17176348448,
        bestseller: false
    },
    {
        _id: "pro8",
        name: "N95 Respirator Mask (Pack of 5)",
        description: "Medical-grade protection against airborne particles",
        price: 299,
        image: [p_8],
        category: ["Protective Gear", "Masks"],
        date: 17176348448,
        bestseller: true
    },
    {
        _id: "pro9",
        name: "Disposable Nitrile Gloves (Box of 100)",
        description: "Latex-free medical examination gloves",
        price: 399,
        image: [p_9],
        category: ["Protective Gear", "Gloves"],
        date: 17176348448,
        bestseller: false
    },
    {
        _id: "pro10",
        name: "Antibacterial Hand Sanitizer (500ml)",
        description: "70% alcohol formula kills 99.9% germs",
        price: 149,
        image: [p_10],
        category: ["Hygiene", "Sanitizers"],
        date: 17176348448,
        bestseller: true
    },
    {
        _id: "pro11",
        name: "Digital Blood Pressure Monitor",
        description: "Clinically validated upper arm monitor with memory",
        price: 1299,
        image: [p_11],
        category: ["Medical Equipment", "Home Diagnostics"],
        date: 17176348448,
        bestseller: true
    },
    {
        _id: "pro12",
        name: "Mini Pill Organizer (7-Day)",
        description: "Compact daily medication reminder case",
        price: 89,
        image: [p_12],
        category: ["Accessories", "Organizers"],
        date: 17176348448,
        bestseller: false
    },
    {
        _id: "pro13",
        name: "Elastic Bandage (3\" width)",
        description: "Self-adhering support for sprains and strains",
        price: 65,
        image: [p_13],
        category: ["First Aid", "Bandages"],
        date: 17176348448,
        bestseller: false
    },
    {
        _id: "pro14",
        name: "Aloe Vera Sanitizing Gel (250ml)",
        description: "Moisturizing hand sanitizer with aloe vera",
        price: 99,
        image: [p_14],
        category: ["Hygiene", "Sanitizers"],
        date: 17176348448,
        bestseller: false
    },
    {
        _id: "pro15",
        name: "Infrared Forehead Thermometer",
        description: "Non-contact instant temperature reading",
        price: 899,
        image: [p_15],
        category: ["Medical Equipment", "Thermometers"],
        date: 17176348448,
        bestseller: true
    },
    {
        _id: "pro16",
        name: "Digital LCD Thermometer",
        description: "Accurate room and body temperature measurement",
        price: 249,
        image: [p_16],
        category: ["Medical Equipment", "Thermometers"],
        date: 17176348448,
        bestseller: false
    },
    {
        _id: "pro17",
        name: "Pocket Microscope (100x)",
        description: "Portable magnification for home and field use",
        price: 599,
        image: [p_17],
        category: ["Medical Equipment", "Diagnostic Tools"],
        date: 17176348448,
        bestseller: false
    },
    {
        _id: "pro18",
        name: "ZEPHYR Inhaler for Asthma",
        description: "Portable relief for asthma and breathing difficulties",
        price: 1299,
        image: [p_18],
        category: ["Respiratory Care", "Inhalers"],
        date: 17176348448,
        bestseller: false
    },
    {
        _id: "pro19",
        name: "Mercury Blood Pressure Monitor",
        description: "Traditional accurate blood pressure measurement",
        price: 1599,
        image: [p_19],
        category: ["Medical Equipment", "Home Diagnostics"],
        date: 17176348448,
        bestseller: false
    },
    {
        _id: "pro20",
        name: "Professional Stethoscope",
        description: "Dual-head chestpiece for clear auscultation",
        price: 1499,
        image: [p_20],
        category: ["Medical Equipment", "Diagnostic Tools"],
        date: 17176348448,
        bestseller: true
    }
];