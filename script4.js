//Resume with JSON

var resume=
[
    {
    "Name":"Harish S S",
    "Title":"Full Stack Develpoer",
    "Contact":{
        "email":"harishsubramanain4122001@gmail.com",
        "phone":8056529404,
        "address":"Thirunagar, Madurai, TamilNadu"
    },
    },
    {
    "Summary":"Quick learner, energetic and have ability to adapt working environment and nature of work in a short period of time."
    },
    {
    "Experience": 
        {
          "title": "Assitant Engineer",
          "company": "The New Indian Express",
          "location": "Madurai",
          "dates": "August 2023 - Present",
          "description": "Hardware troubleshooting, Sever Maintenance, Virtual Machine, OS Installation, Dat Backup."
        },
    },
    {
    "Education":
            {
              "degree": "B.E - ECE",
              "college": "KLNCE",
              "location": "Madurai",
              "Year": "2019 - 2023"
            }
    },
    {
    "SkillSet":
    [
        "HTML",
        "CSS",
        "JavaScript",
        "Java"
    ]
    },
    {
        "Project Handled":
        {
            "Title":"CRYPTOGRAPHY HYBRID ALGORITHM EMBED WITH IMAGE FOR SECURING DATA",
            "Description": "To securely transfer data by embedded the information in images and then transfer them. The information is encrypted using the Advance Encryption Standard method, and the LSB algorithm is used to mask the data in the cipher text with an image"
        }
    },
    {
        "Co-Curricular":
        {
        "1":"Successfully completed “JAVASCRIPT” course organized by PTCEE secured a grade of First Class",
        "2":"Successfully completed “CLOUD COMPUTING” course organized by NPTEL secured a grade of First Class"
        },
        
   },
   {
    "Extra-Curricular":
    {
        "1":"Secured “A-grade NCC certificate” in army",
        "2":"NCC trucking camp participation held in Bihar",
        "3":"NCC Camp participation held at Thirumangalam, Maduari"
    }
   },
   {
    "Hobbies":
    {
        "1":"Playing Volleyball (Thirunagar volleyball club - Thirunagar",
        "2":"Google Surfing"
    }
   },
   {
    "Declaration":"I do hereby declare that the above information is true to the best of my knowledge"  
   }
]
//iterating using for loop
for (let i = 0; i < resume.length; i++) {
    const res = resume[i];
    for (const key in res) {
        if (res.hasOwnProperty(key)) {
            const subres = res[key];
            if (typeof subres === 'object') {
                console.log(key + ":");
                for (const subkey in subres) {
                    if (subres.hasOwnProperty(subkey)) {
                        console.log(`  ${subkey}: ${subres[subkey]}`);
                    }
                }
            } else if (Array.isArray(subres)) {
                console.log(key + ":");
                subres.forEach((item, index) => {
                    console.log(`  ${index + 1}. ${item}`);
                });
            } else {
                console.log(`${key}: ${subres}`);
            }
        }
    }
}
// Iterate using foreach loop
resume.forEach((section) => {
    for (const key in section) {
        if (section.hasOwnProperty(key)) {
            const subsection = section[key];
            if (typeof subsection === 'object') {
                console.log(key + ":");
                Object.keys(subsection).forEach((subkey) => {
                    console.log(`  ${subkey}: ${subsection[subkey]}`);
                });
            } else if (Array.isArray(subsection)) {
                console.log(key + ":");
                subsection.forEach((item, index) => {
                    console.log(`  ${index + 1}. ${item}`);
                });
            } else {
                console.log(`${key}: ${subsection}`);
            }
        }
    }
});


