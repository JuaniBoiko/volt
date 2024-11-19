'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Battery, Laptop, Zap, Home, BarChart, Settings, Sun, Moon, PieChart, Plug, Sliders } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1], delay: 3 }}
    >
      <motion.img 
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bTeozdQiv3SezkfwJKDGgukaauspjA.png" 
        alt="Volt logo" 
        className="w-24 h-24"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      />
    </motion.div>
  )
}

function AddDeviceDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Añadir nuevo dispositivo</DialogTitle>
          <DialogDescription>
            Ingrese los detalles del nuevo dispositivo para añadirlo a su panel de energía.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nombre
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="wattage" className="text-right">
              Potencia (W)
            </Label>
            <Input id="wattage" className="col-span-3" type="number" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-gray-800 text-white hover:bg-gray-900">
            Añadir dispositivo
          </Button>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function HomePage() {
  const [isAddDeviceOpen, setIsAddDeviceOpen] = useState(false)

  return (
    <div className="space-y-6">
      <Card className="bg-white/10 dark:bg-zinc-900/50 backdrop-blur-xl">
        <CardContent className="p-6 space-y-6">
          <div className="relative h-20 flex items-center">
            <div className="absolute inset-y-0 left-0 w-16 flex items-center justify-center">
              <Zap className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="ml-16 h-14 w-full bg-gradient-to-r from-yellow-500/20 to-transparent rounded-lg relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-500/50 rounded-lg"
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
            <div className="ml-16 h-14 w-full bg-gradient-to-r from-blue-500/20 to-transparent rounded-lg relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-500/50 rounded-lg"
                style={{ width: '45%' }}
              />
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <span className="text-xl font-medium">24.81 W</span>
                <Battery className="h-5 w-5 text-zinc-400" />
              </div>
            </div>
          </div>
          <Button onClick={() => setIsAddDeviceOpen(true)}   className="w-full bg-gray-800 text-white hover:bg-gray-900">
            Añadir dispositivo
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-white/10 dark:bg-zinc-900/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Perspectivas de IA</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="bg-green-500/20 rounded-full p-2">
                <Zap className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-medium">Oportunidad de ahorro de energía</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Tu portátil está consumiendo más energía de lo habitual. Considera cerrar las aplicaciones no utilizadas.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-blue-500/20 rounded-full p-2">
                <Zap className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="font-medium">Acción automatizada realizada</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">La IA ha programado tu lavavajillas para funcionar durante las horas de menor consumo para ahorrar en costos de energía.</p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-white/10 dark:bg-zinc-900/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Acciones de IA</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 rounded-full p-2">
                  <Zap className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <p className="font-medium">Control inteligente del termostato</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Permitir que la IA optimice la temperatura</p>
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
                  <p className="font-medium">Apagado automático de dispositivos</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Apagar dispositivos inactivos</p>
                </div>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>
      <AddDeviceDialog open={isAddDeviceOpen} onOpenChange={setIsAddDeviceOpen} />
    </div>
  )
}

function AnalysisPage() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/10 dark:bg-zinc-900/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Análisis de Consumo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center">
            <PieChart className="h-48 w-48 text-blue-500" />
          </div>
          <p className="text-center mt-4">Distribución del consumo energético por dispositivo</p>
        </CardContent>
      </Card>
      <Card className="bg-white/10 dark:bg-zinc-900/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Tendencias de Consumo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center">
            <BarChart className="h-48 w-48 text-green-500" />
          </div>
          <p className="text-center mt-4">Consumo energético semanal</p>
        </CardContent>
      </Card>
    </div>
  )
}

function DevicesPage() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/10 dark:bg-zinc-900/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Dispositivos Conectados</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Laptop className="h-6 w-6 text-blue-500" />
                <span>Portátil</span>
              </div>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">24.81 W</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Plug className="h-6 w-6 text-green-500" />
                <span>Nevera</span>
              </div>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">102.5 W</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Zap className="h-6 w-6 text-yellow-500" />
                <span>Iluminación</span>
              </div>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">45.2 W</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function SettingsPage() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/10 dark:bg-zinc-900/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Configuración</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Sliders className="h-6 w-6 text-purple-500" />
                <span>Notificaciones</span>
              </div>
              <Switch />
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Sun className="h-6 w-6 text-yellow-500" />
                <span>Modo Oscuro</span>
              </div>
              <Switch />
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Zap className="h-6 w-6 text-blue-500" />
                <span>Ahorro de Energía</span>
              </div>
              <Switch />
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export function SmartEnergyDashboardComponent() {
  const [darkMode, setDarkMode] = useState(true)
  const [showSplash, setShowSplash] = useState(true)
  const [activeTab, setActiveTab] = useState("home")

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <SplashScreen key="splash" />
      ) : (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
          className={`min-h-screen ${darkMode ? 'dark' : ''}`}
        >
          <div className="bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen p-6 pb-20">
            <header className="flex justify-between items-center mb-6">
              <style>
                {`
                  /* Custom scrollbar styles */
                  ::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                  }

                  ::-webkit-scrollbar-thumb {
                    background-color: ${darkMode ? '#52525b' : '#d1d5db'};
                    border-radius: 4px;
                  }

                  ::-webkit-scrollbar-thumb:hover {
                    background-color: ${darkMode ? '#3f3f46' : '#9ca3af'};
                  }

                  ::-webkit-scrollbar-track {
                    background-color: ${darkMode ? '#18181b' : '#f3f4f6'};
                  }
                `}
              </style>
              <div className="flex items-center gap-2">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bTeozdQiv3SezkfwJKDGgukaauspjA.png" 
                  alt="Volt logo" 
                  className="w-8 h-8 rounded-[10px]"
                />
                <h1 className="text-2xl font-bold">Volt</h1>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </header>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsContent value="home">
                <HomePage />
              </TabsContent>
              <TabsContent value="analysis">
                <AnalysisPage />
              </TabsContent>
              <TabsContent value="devices">
                <DevicesPage />
              </TabsContent>
              <TabsContent value="settings">
                <SettingsPage />
              </TabsContent>

              <motion.nav
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
  className="fixed bottom-0 left-0 right-0 bg-zinc-200 dark:bg-zinc-800 py-3 pt-4 pb-4"              >
                <TabsList className="flex justify-around p-4">
                  <TabsTrigger 
                    value="home" 
                    className="flex flex-col items-center data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100 rounded-md px-3 py-2"
                  >
                    <Home className="h-5 w-5" />
                    <span className="text-xs mt-1">Inicio</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="analysis" 
                    className="flex flex-col items-center data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100 rounded-md px-3 py-2"
                  >
                    <BarChart className="h-5 w-5" />
                    <span className="text-xs mt-1">Análisis</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="devices" 
                    className="flex flex-col items-center data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100 rounded-md px-3 py-2"
                  >
                    <Zap className="h-5 w-5" />
                    <span className="text-xs mt-1">Dispositivos</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="settings" 
                    className="flex flex-col items-center data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100 rounded-md px-3 py-2"
                  >
                    <Settings className="h-5 w-5" />
                    <span className="text-xs mt-1">Ajustes</span>
                  </TabsTrigger>
                </TabsList>
              </motion.nav>
            </Tabs>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}