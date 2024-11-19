'use client'

import { useState } from 'react'
import { Battery, Laptop, Zap, Home, PieChart, Settings, Sun, Moon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function SmartEnergyDashboard() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen p-6 pb-20">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Smart Energy</h1>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </header>

        <Card className="mb-6 bg-white/10 dark:bg-zinc-900/50 backdrop-blur-xl">
          <CardContent className="p-6 space-y-6">
            <div className="relative h-20 flex items-center">
              <div className="absolute inset-y-0 left-0 w-16 flex items-center justify-center">
                <Zap className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="ml-16 h-14 w-full bg-gradient-to-r from-yellow-500/20 to-transparent rounded-r-lg relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-500/50"
                  style={{ width: '75%' }}
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <span className="text-xl font-medium">58.76 W</span>
                  <Battery className="h-5 w-5 text-zinc-400" />
                </div>
              </div>
            </div>

            <div className="relative h-20 flex items-center">
              <div className="absolute inset-y-0 left-0 w-16 flex items-center justify-center">
                <Laptop className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-16 h-14 w-full bg-gradient-to-r from-blue-500/20 to-transparent rounded-r-lg relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-500/50"
                  style={{ width: '45%' }}
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <span className="text-xl font-medium">24.81 W</span>
                  <Battery className="h-5 w-5 text-zinc-400" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-white/10 dark:bg-zinc-900/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="bg-green-500/20 rounded-full p-2">
                  <Zap className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">Energy saving opportunity</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Your laptop is consuming more power than usual. Consider closing unused applications.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-blue-500/20 rounded-full p-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Automated action taken</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">AI has scheduled your dishwasher to run during off-peak hours to save on energy costs.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-white/10 dark:bg-zinc-900/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>AI Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/20 rounded-full p-2">
                    <Zap className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium">Smart thermostat control</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Allow AI to optimize temperature</p>
                  </div>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-500/20 rounded-full p-2">
                    <Zap className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium">Automatic device shutdown</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Turn off idle devices</p>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>

        <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex justify-around p-4">
            <Button variant="ghost" size="icon" className="flex flex-col items-center">
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Home</span>
            </Button>
            <Button variant="ghost" size="icon" className="flex flex-col items-center">
              <PieChart className="h-5 w-5" />
              <span className="text-xs mt-1">Analytics</span>
            </Button>
            <Button variant="ghost" size="icon" className="flex flex-col items-center">
              <Zap className="h-5 w-5" />
              <span className="text-xs mt-1">Devices</span>
            </Button>
            <Button variant="ghost" size="icon" className="flex flex-col items-center">
              <Settings className="h-5 w-5" />
              <span className="text-xs mt-1">Settings</span>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
}