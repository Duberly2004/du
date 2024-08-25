import wapa from "../assets/ana/wapa.jpeg"
import chiquita from "../assets/ana/chiquita.png"
import enojona from "../assets/ana/enojada.jpeg"
import juguetona from "../assets/ana/juguetona.jpeg"
import mongola from "../assets/ana/mongola.jpeg"
import ana from "../assets/ana/ana.jpeg"
export interface User {
    emotion:string
    name:string
    photo:string
    skills:string[]
}
export const users:User[] = [
    {
        emotion: "Hermosa",
        name: "Ana la mongola",  // Puedes reemplazarlo con su nombre real
        photo: ana, // Agrega un link o imagen personalizada
        skills: [
            "Tiene la capacidad de transformar un día gris en uno lleno de luz con solo estar presente.",
            "Me reta a ser mejor persona, a superarme y a perseguir mis sueños.",
            "Cada conversación con ella es enriquecedora, con su inteligencia y empatía desbordante.",
            "Es increíblemente detallista, siempre pensando en los pequeños gestos que hacen la diferencia.",
            "Su amor y cariño hacen que el mundo parezca un lugar más cálido y hermoso."
        ]
    },
    {
        emotion: "Chiquita",
        name: "Ana la chiquitita",
        photo: chiquita,
        skills: [
            "Tiene una belleza natural que no necesita de mucho esfuerzo, siempre se ve increíble.",
            "Su estilo es único, sabe cómo combinar elegancia y sencillez de manera perfecta.",
            "No importa la ocasión, siempre se ve deslumbrante con su presencia.",
            "Su confianza y actitud la hacen aún más atractiva, porque sabe quién es.",
            "No solo es wapa por fuera, su personalidad brilla tanto como su apariencia, lo que la hace irresistible."
        ]
    },
    {
        emotion: "Preciosa",
        name: "Ana la más preciosa",
        photo: wapa,
        skills: [
            "Su pasión por explorar el mundo me inspira a ser más valiente.",
            "Tiene un espíritu libre que me hace sentir vivo cuando estamos juntos.",
        ]
    },
    {
        emotion: "Enojona",
        name: "Ana la bb más hermosa",
        photo: mongola,
        skills: [
            "Tiene un corazón enorme, siempre está dispuesta a cuidar a los demás.",
            "Sabe exactamente cómo hacerme sentir especial con sus pequeños gestos de cariño.",
            "Siempre se asegura de que los que ama estén bien, incluso cuando está ocupada.",
            "Es una persona que pone a los demás primero, pero sabe equilibrar eso con el autocuidado.",
            "Me cuida con tanto amor que me siento afortunado todos los días de tenerla en mi vida."
        ]
    },
    {
        emotion: "Juguetona",
        name: "Ana la juguetona",
        photo: enojona,
        skills: [
            "Siempre encuentra maneras creativas de hacerme reír y disfrutar el momento.",
            "Tiene un sentido del humor increíble que me hace sonreír incluso en los días difíciles.",
            "Nos divertimos tanto juntos que cada día con ella se siente como una pequeña aventura.",
            "Es capaz de hacer que cualquier situación sea ligera y entretenida.",
            "Su energía y alegría son contagiosas, haciéndome sentir más joven y libre."
        ]
    },
    {
        emotion: "Mongola",
        name: "Ana la bella mongola",
        photo:juguetona,
        skills: [
            "Me sorprende constantemente con pequeños detalles que muestran cuánto le importo.",
            "Es increíblemente perceptiva, notando siempre cuando algo me preocupa.",
            "Tiene un don para saber exactamente qué decir o hacer en los momentos adecuados.",
            "Es considerada en todo lo que hace, poniendo su corazón en cada acción."
        ]
    }
] 