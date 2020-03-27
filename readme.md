    // db.collection('Expenses').find().toArray(function(err, expenses){
        
    //     //calculates budget 
    //     const budget = expenses.filter(number => number.budget)        
    //     const budgetTotal = Number(budget[0].budget)
    //     console.log(`Your budget is: ${budgetTotal}`)

    //     // calculates expenses
    //     const expenseNumber = expenses.reduce(function(prev, current){
    //         if(current.expenseAmount) {
    //             return prev += Number(current.expenseAmount)
    //         }
    //         return prev
    //     }, 0)

    //     console.log('Expense total:', expenseNumber)

    //     //calculates assets
    //     const assetNumber = expenses.reduce(function(prev, current){
    //         if(current.assetAmount) {
    //             return prev += Number(current.assetAmount)
    //         }
    //         return prev
    //     }, 0)

    //     console.log('Asset total:', assetNumber)

    //     //calculates total
    //     let calculateTotal = function(budgetTotal, expenseNumber, assetNumber) {
    //         if(assetNumber > expenseNumber) {
    //             return budgetTotal + assetNumber - expenseNumber
    //         } else if(expenseNumber > assetNumber) {
    //             return budgetTotal + assetNumber - expenseNumber
    //         }
    //     }
        
    //     let historyTotal = calculateTotal(budgetTotal, expenseNumber, assetNumber)
    
    //     // calculates balance

    //     const calculateBalance = function(budgetTotal, assetNumber, expenseNumber) {
    //        // budget + income - expenses = net income
            
    //         if(budgetTotal + assetNumber - expenseNumber <= 0) {
    //             return `You are over budget`
    //         } else if(budgetTotal + assetNumber - expenseNumber > 0){
    //             return `You are within budget`
    //         }
    //     }

    //     const balance = calculateBalance(budgetTotal, assetNumber, expenseNumber)
    //     console.log(balance)


      //-     thead
    //-         tr
    //-             th Expense
    //-             th Amount
    //-             th Asset
    //-             th Asset Amount
    //-     tbody
    //-         for expense in expenses
    //-             tr
    //-                 td= expense.expense
    //-                 td= expense.expenseAmount
    //-                 td= expense.asset
    //-                 td= expense.assetAmount
    //- p Total
    //- p(id="total")= historyTotal    
    //- p= balance   each expense in expenses
    //-         h1= expense.budget
    //- tab




            //- div(class="reports__container")
        //-     p(class="red__bg")= report.expense 
        //-     p(class="red__bg")= report.expenseAmount
        //-         a(href="/delete/" + report._id) Delete
        //-     p(class="green__bg")= report.asset
        //-     p(class="green__bg")= report.assetAmount
        //-         a(href="/delete/" + report._id) Delete