"use client"

import { useEffect, useState } from "react"

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0)
  const steps = [
    { text: "Analyzing meeting notes...", emoji: "🔍" },
    { text: "Identifying key challenges...", emoji: "🧩" },
    { text: "Structuring approach...", emoji: "🏗️" },
    { text: "Calculating metrics...", emoji: "📊" },
    { text: "Finalizing brief...", emoji: "✨" },
  ]
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 50)

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval)
          return steps.length - 1
        }
        return prev + 1
      })
    }, 1500)

    return () => {
      clearInterval(interval)
      clearInterval(stepInterval)
    }
  }, [steps.length])

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8 max-w-md mx-auto animate-fade-in">
      {/* Colorful emoji cloud */}
      <div className="relative w-full h-24 mb-4">
        {["✨", "🚀", "💡", "📈", "🎯", "🔮", "💪", "🏆"].map((emoji, index) => (
          <div
            key={index}
            className="absolute text-2xl animate-float"
            style={{
              left: `${10 + index * 10}%`,
              top: `${(index % 3) * 20}%`,
              animationDelay: `${index * 0.3}s`,
              opacity: 0.7 + (index % 3) * 0.1,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Gradient progress bar */}
      <div className="relative w-full h-3 bg-pastel-purple rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-vibrant-purple via-vibrant-blue to-vibrant-teal animate-shimmer"
          style={{ width: `${progress}%`, backgroundSize: "200% 100%" }}
        ></div>
      </div>

      <div className="relative w-36 h-36">
        {/* Animated gradient circles */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pastel-purple to-pastel-blue animate-pulse-soft"></div>
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent"
          style={{
            background: `conic-gradient(from 0deg, #8A63D2 ${progress}%, transparent ${progress}%)`,
            maskImage: "radial-gradient(transparent 60%, black 62%)",
            WebkitMaskImage: "radial-gradient(transparent 60%, black 62%)",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-light text-vibrant-purple">{Math.round(progress)}%</span>
        </div>
      </div>

      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2 animate-fade-up">
          <span className="text-3xl animate-bounce-light">{steps[currentStep].emoji}</span>
          <p className="text-lg font-medium text-vibrant-purple">{steps[currentStep].text}</p>
        </div>
        <p className="text-sm text-clay-600">Creating your Impact Brief with precision</p>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                animation: "pulse-soft 1.5s ease-in-out infinite",
                animationDelay: `${i * 0.3}s`,
                backgroundColor: i === 0 ? "#8A63D2" : i === 1 ? "#3E92CC" : "#2EC4B6",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

