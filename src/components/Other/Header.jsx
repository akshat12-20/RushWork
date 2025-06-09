import React from 'react'

const Header = () => {
return (
    <div class="flex items-end justify-between">
    <h1 class="text-2xl font-medium">Hello <br /> <span class="text-3xl font-semibold">Akshat 👋</span> </h1>
    <button class="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm">Log Out</button>
    </div>
)
}

export default Header
