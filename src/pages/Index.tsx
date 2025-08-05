import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const featuredModels = [
    {
      name: "Gemini 2.5 Pro",
      provider: "by google",
      price: "179.00",
      score: "2.4",
      change: "-12.1%",
      trend: "Points granted",
      icon: "✨"
    },
    {
      name: "Horizon Beta",
      provider: "by openrouter",
      price: "102.08",
      score: "1.3+",
      change: "",
      trend: "Points granted",
      icon: "🌅",
      badge: "Beta"
    },
    {
      name: "Claude Sonnet 4",
      provider: "by anthropic",
      price: "651.48",
      score: "2.2+",
      change: "-1.75%",
      trend: "Points granted",
      icon: "🔮"
    }
  ];

  const stats = [
    { value: "8.4T", label: "Monthly Tokens" },
    { value: "2.5M+", label: "Global Users" },
    { value: "60+", label: "Active Providers" },
    { value: "400+", label: "Models", highlight: true }
  ];

  const steps = [
    {
      number: "1",
      title: "Signup",
      description: "Create an account to get started. You can set up an org for your team later.",
      actions: ["Google", "GitHub", "Apple", "Email"],
      price: "$99"
    },
    {
      number: "2", 
      title: "Buy credits",
      description: "Credits can be used with any model or provider.",
      actions: ["API: $", "Mar 30"],
      price: "$10"
    },
    {
      number: "3",
      title: "Get your API key",
      description: "Create an API key and start making requests to any OpenAI-compatible endpoint.",
      actions: ["OPENROUTER_API_KEY"]
    }
  ];

  const features = [
    {
      title: "One API for Any Model",
      description: "Access all major models through a single, unified interface. OpenAI SDK works out of the box.",
      icon: "🔗",
      action: "Browse all"
    },
    {
      title: "Higher Availability", 
      description: "Reliable AI models on our distributed infrastructure. Fall back to other providers when one goes down.",
      icon: "⚡",
      action: "Learn more"
    },
    {
      title: "Price and Performance",
      description: "Keep costs in check without sacrificing speed. Optimization runs at the edge, adding just ~25ms latency on your end-to-end inference.",
      icon: "📊",
      action: "Learn more"
    },
    {
      title: "Custom Data Policies",
      description: "Protect your organization with fine-grained data policies. Ensure prompts and data can go to the models and providers you trust.",
      icon: "🛡️",
      action: "View docs"
    }
  ];

  const announcements = [
    {
      title: "Presets: How To Seamlessly Transfer Model Configurations Across Apps",
      description: "Discover Presets and how everyone Server-side renders your simplify your model workflows.",
      date: "7/26/2024",
      tag: "New"
    },
    {
      title: "New Privacy-Focused Provider Drop: Venice",
      description: "Venice OpenRouter as a new provider, offering AI Thoughts uncensored model for private, powerful, and non-restrictive AI.",
      date: "7/14/2024"
    },
    {
      title: "Use OpenRouter Models in Cursor: Try it with Moonshot AI's Kimi K2",
      description: "Explore it in action. See how effortlessly you can run Kimi K2 in Cursor using OpenRouter's flexible model routing.",
      date: "7/13/2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-semibold">OpenRouter</span>
            </div>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search" 
                className="pl-10 bg-gray-50 border-gray-200"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Models</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Chat</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Rankings</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Enterprise</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Docs</a>
            <Button variant="outline" size="sm">Sign in</Button>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="flex gap-8 py-12">
          {/* Left Content */}
          <div className="flex-1">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  The Unified Interface For LLMs
                </h1>
                <p className="text-lg text-gray-600 mt-4">
                  Better <span className="text-blue-600">prices</span>, better <span className="text-blue-600">uptime</span>, no subscription.
                </p>
              </div>

              <div className="relative">
                <Input 
                  placeholder="Start a message" 
                  className="pr-12 h-12 text-base"
                />
                <Button 
                  size="sm" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Featured Models */}
          <div className="w-80">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Featured Models</h3>
                <a href="#" className="text-sm text-blue-600 hover:underline">View Rankings</a>
              </div>
              
              <div className="space-y-3">
                {featuredModels.map((model, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{model.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium text-gray-900">{model.name}</h4>
                            {model.badge && (
                              <Badge variant="secondary" className="text-xs">
                                {model.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{model.provider}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-sm font-medium">{model.price}</span>
                            <span className="text-sm text-gray-500">{model.score}</span>
                            {model.change && (
                              <span className={`text-sm ${model.change.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>
                                {model.change}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-400 mt-1">{model.trend}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 border-t border-gray-100">
          <div className="grid grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className={`text-4xl font-bold ${stat.highlight ? 'text-blue-600' : 'text-gray-900'}`}>
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Section */}
        <div className="py-16">
          <div className="grid grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium">
                      {step.number}
                    </div>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-gray-100 rounded border"></div>
                        <span className="text-sm text-gray-500">{action}</span>
                      </div>
                    ))}
                  </div>
                  {step.price && (
                    <div className="text-lg font-semibold text-gray-900">
                      {step.price}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="py-16">
          <div className="grid grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {feature.description}
                    </p>
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      {feature.action} →
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Announcements */}
        <div className="py-16">
          <div className="flex gap-8">
            <div className="flex-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Announcements</h2>
                  <a href="#" className="text-sm text-blue-600 hover:underline">View all →</a>
                </div>
                
                <div className="space-y-6">
                  {announcements.map((announcement, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium text-gray-900 leading-snug pr-4">
                          {announcement.title}
                        </h3>
                        {announcement.tag && (
                          <Badge variant="secondary" className="text-xs">
                            {announcement.tag}
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {announcement.description}
                      </p>
                      <div className="text-xs text-gray-400">
                        {announcement.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="w-80">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Explore Models</h3>
                <p className="text-sm text-gray-600">
                  Discover AI models across our collection, from all major labs and providers.
                </p>
                <Button variant="outline" className="w-full">
                  View models →
                </Button>
              </div>
              
              <div className="mt-8 space-y-4">
                <h3 className="font-semibold text-gray-900">Model & App Rankings</h3>
                <p className="text-sm text-gray-600">
                  Explore latest usage across models, labs, and public applications.
                </p>
                <Button variant="outline" className="w-full">
                  View rankings →
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-8">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span>© 2023 - 2025 OpenRouter, Inc.</span>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-gray-700">Status</a>
              <a href="#" className="hover:text-gray-700">Announcements</a>
              <a href="#" className="hover:text-gray-700">Docs</a>
              <a href="#" className="hover:text-gray-700">About</a>
              <a href="#" className="hover:text-gray-700">Partners</a>
              <a href="#" className="hover:text-gray-700">Enterprise</a>
              <a href="#" className="hover:text-gray-700">Careers</a>
              <a href="#" className="hover:text-gray-700">Pricing</a>
              <a href="#" className="hover:text-gray-700">Privacy</a>
              <a href="#" className="hover:text-gray-700">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;