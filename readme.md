// THING TO DO

<!-- 1. FIX BUDGET DELETE
2. STYLE
3. REMOVE DUPLICATE FORMS FOR INPUTS //
4. SEPARATE THE UPDATES WITH SEPARATE ROUTES //
5. REMOVE FONTS WE'RE NOT USING //
6. ORGANIZE CSS FILES IF WE HAVE TIME //
7. FLEX GRID
8. DEPLOY -->


1. Mapped over reports
2. Combined budgets and reports together, it is rendering multiple and still breaking
3. duplicate budgets can be deleted
4. findByIdAndDelete, findOneAndDelete and deleteOne methods used
5. conditionals in pug
6. changing routers and 
7. redirecting to index from delete.js
8. copied the structure of update.js
9. created const realBudgets = budgets[0]._id; to extract specific id
10. checked schema file
11. NOTE: It is not sending the error message, rather it is returning an empty object which means it passed the await
12. Iterated over it and put conditionals to assign value 
         const budgets = documents.filter(expense => {
            if(budgets[0].budget < 0 ) {
                return 0
            } else {
                return expense.budget
            }
        });
13. Manually entering budget: 0 will be broken