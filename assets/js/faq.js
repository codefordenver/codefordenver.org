const faqs = [
    {
        question: 'How do you find projects?',
        answer: 'We source projects in a few ways. Most of our projects come our members having a connection to a partner that needs our help, but we also take project inquiries through email, find good projects in the Code for America network, and partners showing up to our project night.'
    },{
        question: 'What kind of projects do you work on?',
        answer: 'We focus on projects that help the community in some tangible way. We work “with” not “for” our partners and hope to find things that are universal and can be shared through the Code for America brigade network.'
    },{
        question: 'Can I get involved even if I’m not a programmer or interested in programming?',
        answer: 'Definitely. We do a lot of coding, but need problem solvers from all professions and viewpoints to make truly inclusive, community focused solutions. We have volunteers with backgrounds in design, marketing, sales, organizing, nonprofits, and project management. All of it is valued and useful for our mission.'
    },{
        question: 'Can I get involved if I’m a beginner programmer or still in school?',
        answer: 'Yes! We pride ourselves on being an inclusive community that will help people apply the skills they are learning. Our members have a wide range of experience levels and we love to welcome in new coders.'
    },{
        question: 'Where can I learn to program?',
        answer: 'There are a bunch of resources to chose from, including online free and paid courses and schools or programs in the Denver area. We like to recommend some of the learn-to-code meetups in Denver too, especially the ones hosted by the Denver Public Library.'
    },{
        question: 'How are you connected to Code for America?',
        answer: 'We are a local chapter of Code for America, so we work closely with them. But we are independent in the projects we work on, with a focus on our local community.'
    }
]

displayFAQs(faqs)

function displayFAQs(faqs){
    const faqContainer = document.querySelector('.faq-list')

    faqs.forEach(faq => {
        const div = document.createElement('div')

        div.innerHTML = `
            <div class='faq-pattern pattern-diagonal-lines-md'></div>
            <dt>${faq.question}</dt>
            <dd>${faq.answer}</dd>
        `

        faqContainer.append(div)
    })
}


