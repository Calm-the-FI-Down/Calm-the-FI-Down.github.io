import React from 'react';
import ToDoList from './components/ToDoList.jsx';
import './JourneyChecklistApp.css';



function CouplesChecklistApp() {

    const couplesChecklistItemList = [
        {
            id: 1,
            text: 'What is your current income and employement situation?',
            details: 'While not the end-all-be-all, this is an important foundation for all other questions.',
            completed: false
        },
        {
            id: 2,
            text: 'How much debt do you and your partner have?',
            details: 'Eg. student loans, credit cards, car loans, or similar.',
            completed: false
        },
        {
            id: 3,
            text: 'Ask "How did your family handle money growing up?"',
            details: '"Was there stress, was the topic avoided?" This can give insight into each other\'s money mindset and habits.',
            completed: false
        },

        {
            id: 4,
            text: 'How will we split household expenses?',
            details: 'Evenly or proportionally by income are the most common.',
            completed: false
        },
        {
            id: 5,
            text: 'Joint bank accounts or split accounts?',
            details: 'I.e., anything over 10% interest.',
            completed: false
        },
        {
            id: 6,
            text: 'How will we decide on large purchaes such as cars and vacations?',
            details: '',
            completed: false
        },        {
            id: 7,
            text: 'Save for any large expected expenses in the next 5 years in a high-yield savings account.',
            details: '',
            completed: false
        },
        {
            id: 8,
            text: 'Increase to 15% of your pre-tax income towards retirement savings.',
            details: 'Contribute to your 401(k), 403(b), Individual 401(k), SEP-IRA, or if none of the above are available, a taxable brokerage account.',
            completed: false
        },
        {
            id: 9,
            text: 'Max out your contributions to a Health Savings Account (HSA).',
            details: 'HSAs offer triple tax benefits, but not all employers offer the high deductible health plan needed.',
            completed: false
        },
        {
            id: 10,
            text: 'Contribute to a 529 plan or similar option.',
            details: 'If you plan to support your child with paying for education, research your state\'s plans.',
            completed: false
        },
        {
            id: 11,
            text: 'Should we consider a prenup?',
            details: '',
            completed: false
        },
        {
            id: 12,
            text: 'How many children would we like to have?',
            details: 'In the US, the average cost of raising a child is $23,610.',
            completed: false
        },
        {
            id: 13,
            text: 'What are your retirement plans?',
            details: '',
            completed: false
        },
        {
            id: 13,
            text: 'What are your home ownership plans?',
            details: 'Are you ok with renting indefinitely? What size of a house do you want to buy?',
            completed: false
        },
        {
            id: 14,
            text: 'You\'ve successfully achieved the "boring middle"! Now, continue these habits, go enjoy life, and Calm the FI Down.',
            details: '',
            completed: false
        }
    ]

    return (
            <div className="App">
            <ToDoList 
                checklistContent = {couplesChecklistItemList}/>
            </div>
    ); 
}
export { CouplesChecklistApp } ;