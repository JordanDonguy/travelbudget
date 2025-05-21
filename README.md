# 🌍 Travel Budget

A handy web app that helps you calculate your **travel budget** based on your trip duration and expected expenses.  

I made this app to deepen my understanding of **React** and **Redux**, focusing on state management and dynamic UI updates.  

Simply enter your total budget, trip duration, and planned expenses — the app does the rest!

---

## 🧠 Project Overview

**Travel Budget** lets you plan your trip by tracking your total expenses and how much money you’ll have left, all in just a few clicks.

Simply enter your total budget, trip duration, and planned expenses — the app does the rest!

---

## 🧾 How It Works

1. 💰 **Enter your total budget** in the **"Budget"** field  
2. 📅 **Enter the number of days** you’ll be traveling in the **"Days"** field  
3. ➕ **Add expenses** using the form below. Each expense requires:

   - **Description**: What the expense is for (e.g., hotel, flights, food)
   - **Amount**: Cost of the expense
   - **Type**: 
     - `Daily`: Recurring every day of the trip  
     - `One-time`: A single cost (like a plane ticket)
   - **Total**: 
     - Automatically calculated  
     - If `one-time`: total = amount  
     - If `daily`: total = amount × number of days

4. ✅ Click **“Add Expense”** to save the entry and reset the form

---

## 📊 Budget Overview

After entering your expenses:
- 🧾 **Total Expenses**: Automatically calculated based on your entries  
- 💸 **Money Left**: Displays how much of your budget remains after expenses

---

## 🧰 Technologies Used

This app was built using:

- ⚛️ **React**
- 📦 **Redux**

It's designed to be lightweight, responsive, and user-friendly for quick travel budgeting!

---

## 🔗 Live Demo

Try the app here:  
👉 [https://jordandonguy-travelbudget.netlify.app](https://jordandonguy-travelbudget.netlify.app)

---

Thanks for checking it out! 😊 Feel free to leave feedback or suggestions for new features.
