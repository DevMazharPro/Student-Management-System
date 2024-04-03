#! /usr/bin/env node
import inquirer from "inquirer";
let pinC = 15789;
// School Management System
const welcomeStudents = await inquirer.prompt([
    {
        type: "confirm",
        message: "Welcome to AI School, Do you want to take admission here?",
        name: "takeAdmission",
    },
]);
if (welcomeStudents.takeAdmission === true) {
    console.log("Welcome to AI School");
    const options = await inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: [
                "Take Admission",
                "Fees Structure",
                "Faculty Details",
                "Facilities",
                "Enter Your Portal",
                "Exit",
            ],
        },
    ]);
    if (options.action === "Take Admission") {
        const info = await inquirer.prompt([
            {
                type: "list",
                message: "Enter your desired department",
                name: "choice",
                choices: ["Computer Science", "Chemistry", "Botany", "IT"],
            },
            {
                type: "input",
                message: "Enter your name",
                name: "nameStudent",
            },
            {
                type: "input",
                message: "Enter your father's name",
                name: "nameFather",
            },
            {
                type: "input",
                message: "Enter your email",
                name: "emailStudent",
            },
            {
                type: "number",
                message: "Enter your phone number",
                name: "phoneStudent",
            },
            {
                type: "input",
                message: "Enter your address",
                name: "addressStudent",
            },
        ]);
        if (info) {
            console.log(`Congrats, ${info.nameStudent} You are selected in`, info.choice);
        }
    }
    else if (options.action === "Fees Structure") {
        console.log("Computer Science Semester Fees Is 35000 RS \nChemistry Semester Fees Is 26300 RS \nBotany Semester Fees Is 22600 RS \nIT Semester Fees Is 50000 RS");
    }
    else if (options.action === "Faculty Details") {
        const detailsq = await inquirer.prompt([
            {
                type: "list",
                message: "Enter your desired department you want to know about",
                name: "choice",
                choices: ["Computer Science", "Chemistry", "Botany", "IT"],
            },
        ]);
        if (detailsq.choice === "Computer Science") {
            console.log("Computer Science Department Details\nHead Of Department: Tariq Jalbani\nProfessor 1: Syed Abrar Ali Shah\nProfessor 2: Imtiaz Memon\nAssistant Professor: Farooq Shaikh");
        }
        else if (detailsq.choice === "Chemistry") {
            console.log("Chemistry Department Details\nHead Of Department: Asif Bhatti\nProfessor 1: Mazhar Khaskeli\nProfessor 2: Nasim UL Ghani\nAssistant Professor: Mahnoor");
        }
        else if (detailsq.choice === "Botany") {
            console.log("Botany Department Details\nHead Of Department: Altaf Talpur\nProfessor 1: Asim Patrick\nProfessor 2: Mohsin Bughi\nAssistant Professor: Manan Shaikh");
        }
        else {
            console.log("IT Department Details\nHead Of Department: Zia Khan\nProfessor 1: Daniyal Nagori\nProfessor 2: Ameen Alam\nAssistant Professor: Hina Naseer");
        }
    }
    else if (options.action === "Facilities") {
        console.log("Facilities0:\nComputer Lab\nStandby Generator\nAc Classrooms\nHighly Qualified Faculty");
    }
    else if (options.action === "Enter Your Portal") {
        const portalID = await inquirer.prompt([
            {
                type: "password",
                message: "Enter your Student Secret Pin",
                name: "studentPIN",
            },
        ]);
        if (Number(portalID.studentPIN) === pinC) {
            console.log("You have succesfully login to your portal");
            const nAction = await inquirer.prompt([
                {
                    type: "list",
                    message: "What would you like to do?",
                    name: "action",
                    choices: [
                        "Check Your Attendance",
                        "Fees History",
                        "Grades",
                        "Persnol Information",
                        "Exit",
                    ],
                },
            ]);
            if (nAction.action === "Check Your Attendance") {
                console.log("You Have Secured 90% Attendance Till Today");
            }
            else if (nAction.action === "Fees History") {
                console.log("No Pending Fees\nYou have paid all semester fees.");
            }
            else if (nAction.action === "Grades") {
                console.log("A1 Grade in 4th Class\n2nd Position in 5th Class");
            }
            else if (nAction.action === "Persnol Information") {
                console.log("Student Name: Mazhar Hussain\nStudent ID: 1234567890\nStudent Email: Ibrarhalepotooo@gmail.com\nStudent Phone: 03048420046");
            }
            else {
                console.log("You have succesfully logged out of your portal");
            }
        }
        else {
            console.log("You have entered the wrong pin");
        }
    }
    else {
        console.log("Thank you for using the School Management System");
        process.exit(0);
    }
}
else {
    console.log("Thank you for using the School Management System");
    process.exit(0);
}
;
