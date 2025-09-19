import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import bigironLogo from "../assets/bigiron.svg";
import bigironLogoBW from "../assets/bigiron-bw.svg";
import bigironLogoDark from "../assets/bigiron-dark.svg";
import sullivanLogo from "../assets/sullivan-logo.svg";
import sullivanLogoBW from "../assets/sullivan-logo-bw.svg";
import sullivanLogoDark from "../assets/sullivan-logo-reverse.svg";
import sullivanLogoMark from "../assets/sullivan-logo-mark.svg";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertCircle,
  CheckCircle,
  Fingerprint,
  XCircle,
  Bolt,
  Info,
  ListTodo,
  Image,
  Medal,
  MicVocal,
  Type,
  Code,
  Eye,
  Scale,
  Tablet,
  Monitor,
  Layers,
  CirclePlay,
  HandPlatter,
  HandHeart,
  Menu,
  View,
  Target,
  ChevronRight,
  X,
  User,
  SquareMousePointer,
  HeartHandshake,
  Smartphone,
  Quote,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

//import SullivanLogo from "../assets/sullivan-logo.svg";

import { Home, Users, Blocks, Paintbrush, Shield, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

function NavigationLayout() {
  const [activeItem, setActiveItem] = useState("intro");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      id: "brand",
      title: "Brand",
      icon: Bolt,
      subItems: [
        { id: "intro", title: "Intro", icon: CirclePlay },
        { id: "identity", title: "Identity", icon: Fingerprint },
        { id: "standards", title: "Standards", icon: Medal },
      ],
    },
    {
      id: "users",
      title: "Audience",
      icon: Users,
      subItems: [
        { id: "personas", title: "Personas", icon: User },
        { id: "target", title: "Target", icon: Target },
        { id: "tone", title: "Voice & Tone", icon: MicVocal },
      ],
    },
    {
      id: "content",
      title: "Visual Design",
      icon: Paintbrush,
      subItems: [
        { id: "images", title: "Imagery", icon: Image },
        { id: "typography", title: "Typography", icon: Type },
        { id: "figma", title: "Figma", icon: SquareMousePointer },
      ],
    },
    {
      id: "settings",
      title: "Development",
      icon: Code,
      subItems: [
        { id: "components", title: "Components", icon: Blocks },
        { id: "forms", title: "Forms", icon: ListTodo },
        { id: "patterns", title: "Patterns", icon: Layers },
      ],
    },
  ];

  const targets = [
    {
      name: "Chad R. Young",
      role: "Land Buyer",
      age: 35,
      experience: "Beginner",
      mobile: true,
      computer: true,
      tablet: true,
      quote:
        "Land is the key to success. I’m not just buying acres— I’m building a future, one field at a time.",
      goals: [
        "Both purchasing and renting more land",
        "Diversifying their agricultural products (e.g., crops, livestock, etc.)",
        "Growing the farming business and invest profits back into the farm ",
      ],
      frustrations: [
        "High operating costs",
        "Uncertain markets",
        "Labor shortages",
      ],
      bio: "Farmers run their own businesses, and many of them, like any other industry, have their eyes on the horizon. The Expansionist is looking to the operation’s future and wants to expand the farming operation, primarily by obtaining more land.",
      trait: "Expansionist",
      avatar: "../src/assets/Farmer-1.jpg",
    },
    {
      name: "Fred A. Wilkens",
      role: "The Right Equipment",
      age: 28,
      experience: "Intermediate",
      mobile: true,
      computer: true,
      tablet: true,
      quote:
        "It’s not just land, it’s an investment. Every acre should pay for itself and then some.",
      goals: [
        "Routinely evaluate the market for the prices of agricultural commodities",
        "Assess opportunity costs of various inputs",
        "Monitor inputs and outputs for measuring the technical efficiency of the farming operation",
      ],
      frustrations: [
        "Lack of data transparency",
        "Unpredictable external factors and high/rising costs",
        "Weather and volatile markets.",
      ],
      bio: "The bottom line is the bottom line. This farmer makes vital decisions based on what will make the most profit and return on investment. Find the products and services that are going to improve their ROI and you’ll have a customer for life.",
      trait: "ROI Focused",
      avatar: "../src/assets/Farmer-2.jpg",
    },
    {
      name: "Roy B. Biggins",
      role: "Equipment & Cattle",
      age: 45,
      experience: "Advanced",
      mobile: true,
      computer: true,
      tablet: false,
      quote:
        "I stick with what works. My dad ran green, I run green. I need equipment I trust, not just something new.",
      goals: [
        "The personal relationship is as important as the product itself",
        "Brand loyalty benefits the farm",
        "Continued business with the same company can provide cost savings and other benefits",
      ],
      frustrations: [
        "Perceived indifference of large corporations to their traditional loyalty",
        "New technology in their equipment",
        "Marketing through social media channels",
      ],
      bio: "Once you win over a Brand Loyalist, you’ve got their business for the long haul. But, unfortunately, that also means that if they’re doing business with a competitor, getting them to switch to your product can be tricky.",
      trait: "Brand Loyalist",
      avatar: "../src/assets/Farmer-3.jpg",
    },
    {
      name: "Bob W. Robertson",
      role: "Frugal Farmer",
      age: 29,
      experience: "Expert",
      mobile: true,
      computer: true,
      tablet: false,
      quote:
        "I don’t spend a dollar unless I know it’ll save me two. Fancy doesn’t grow crops— smart choices do.",
      goals: [
        "They look for good deals on equipment, seed, crop protection, etc.",
        "Will keep an eye out to cut unnecessary costs",
        "If possible, they’ll take a do-it-yourself approach to the bulk of their farm tasks",
      ],
      frustrations: [
        "Technology",
        "Cost of structures designed for large-scale operations",
        "Rising prices for seeds, feed, fertilizers, and fuel",
      ],
      bio: "Frugal farmers are more likely to use generic inputs than look to see prices online. They are likely not early adopters of technology or anything that requires a long-term payback. They are also more likely to be hands-on in farm decisions or activities.",
      trait: "Frugal",
      avatar: "../src/assets/Farmer-4.jpg",
    },
  ];

  type ComponentSectionProps = {
    title: React.ReactNode;
    children: React.ReactNode;
    description?: React.ReactNode;
  };

  const ComponentSection = ({
    title,
    children,
    description,
  }: ComponentSectionProps) => (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <Separator />
      <div className="space-y-6">{children}</div>
    </div>
  );

  type ComponentDemoProps = {
    title: React.ReactNode;
    description?: React.ReactNode;
    children: React.ReactNode;
    code?: string;
  };

  const ComponentDemo = ({
    title,
    description,
    children,
    code,
  }: ComponentDemoProps) => (
    <div className="space-y-3">
      <div>
        <h4 className="text-lg font-medium">{title}</h4>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="border rounded-lg p-6 bg-background">{children}</div>
      {code && (
        <details className="text-xs">
          <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
            View code
          </summary>
          <pre className="mt-2 p-3 bg-muted rounded text-xs overflow-auto">
            <code>{code}</code>
          </pre>
        </details>
      )}
    </div>
  );

  const getTraitVariant = (trait: string) => {
    switch (trait) {
      case "Frugal":
        return "destructive";
      case "Brand Loyalist":
        return "default";
      case "ROI Focused":
        return "outline";
      case "Expansionist":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getPageContent = (itemId: string) => {
    const contentMap = {
      intro: {
        title: "Brand > Intro",
        content: (
          <div className="space-y-8">
            <div className="text-center space-y-4 py-12">
              <h2 className="text-4xl font-bold tracking-tight">
                Welcome to our Digital Design System
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A comprehensive collection of reusable components, patterns, and
                guidelines built with shadcn/ui and Tailwind CSS.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CirclePlay className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Introduction</CardTitle>
                  <CardDescription>
                    What to expect from our Design System: reusable components,
                    clear guidelines, and scalable patterns for building
                    consistent, accessible user interfaces.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveItem("identity")}
              >
                <CardHeader>
                  <Fingerprint className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Brand Identity</CardTitle>
                  <CardDescription>
                    Understanding our brand's core principles, values, and
                    identity guidelines that define our brand families.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveItem("standards")}
              >
                <CardHeader>
                  <Medal className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Brand Standards</CardTitle>
                  <CardDescription>
                    Logo guidelines, brand colors, and usage standards for our
                    brand families.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveItem("personas")}
              >
                <CardHeader>
                  <User className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Personas</CardTitle>
                  <CardDescription>
                    A description of our key user personas, their goals,
                    frustrations, and backgrounds. These archetypes help guide
                    design decisions and ensure our solutions address real user
                    needs.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveItem("target")}
              >
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Target Audience</CardTitle>
                  <CardDescription>
                    Consumers most likely to benefit from our products and
                    services include demographics, behaviors, and needs.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveItem("tone")}
              >
                <CardHeader>
                  <MicVocal className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Voice & Tone</CardTitle>
                  <CardDescription>
                    Our brand's personality and communication style, including
                    how we speak to users, the language we use, and the
                    emotional tone we convey in all communications.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveItem("images")}
              >
                <CardHeader>
                  <Image className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Imagery</CardTitle>
                  <CardDescription>
                    Acceptable imagery includes high-quality, relevant photos,
                    illustrations, and icons that align with our brand's visual
                    language.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveItem("typography")}
              >
                <CardHeader>
                  <Type className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Typography</CardTitle>
                  <CardDescription>
                    Font families, sizes, weights, and styles that ensure
                    readable and accessible text across all platforms and
                    devices.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveItem("figma")}
              >
                <CardHeader>
                  <SquareMousePointer className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Figma</CardTitle>
                  <CardDescription>
                    Collection of Figma resources, templates, and components for
                    designing with our brand and design system.
                  </CardDescription>
                </CardHeader>
              </Card>{" "}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveItem("components")}
              >
                <CardHeader>
                  <Blocks className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Components</CardTitle>
                  <CardDescription>
                    Set of reusable UI components built with shadcn/ui and
                    Tailwind CSS, designed for consistency and accessibility.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveItem("forms")}
              >
                <CardHeader>
                  <ListTodo className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Forms</CardTitle>
                  <CardDescription>
                    Stylized form elements including inputs, selects,
                    checkboxes, radios, switches, and textareas for collecting
                    user data.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveItem("patterns")}
              >
                <CardHeader>
                  <Layers className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Patterns</CardTitle>
                  <CardDescription>
                    Examples include navigation bars, sidebars, modal dialogs,
                    drawers, tabs, accordions, and grid layouts.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        ),
      },
      identity: {
        title: "Identity",
        content: (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Brand Identity
              </h2>
              <p className="text-muted-foreground mt-2">
                Core brand principles, values, and identity guidelines that
                define our brand families
              </p>
            </div>
            {/* Brand Philosophy */}
            <ComponentSection
              title="Brand Philosophy"
              description="The foundation of our brand identity"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5 text-blue-500" />
                      Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To be the most recognized Customer-Focused Equipment and
                      Real Estate platform.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-emerald-500" />
                      Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To provide a quality unmatched experience for sellers,
                      buyers, our team and all those we serve.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ComponentSection>

            {/* Core Values */}
            <ComponentSection
              title="Core Values"
              description="The principles that guide our brand"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-brand-bi-primary-foreground rounded-full flex items-center justify-center mx-auto">
                    <HandHeart className="h-8 w-8 text-brand-bi-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Honesty</h4>
                    <p className="text-sm text-muted-foreground">
                      Moral principles of truthfulness and transparency in all
                      our interactions.
                    </p>
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-brand-bi-primary rounded-full flex items-center justify-center mx-auto">
                    <HandPlatter className="h-8 w-8 text-brand-bi-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Customer Service</h4>
                    <p className="text-sm text-muted-foreground">
                      Helping customers is our top priority. We listen,
                      understand their needs, and deliver exceptional service at
                      every touchpoint.
                    </p>
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-brand-bi-primary-foreground rounded-full flex items-center justify-center mx-auto">
                    <Star className="h-8 w-8 text-brand-bi-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Quality</h4>
                    <p className="text-sm text-muted-foreground">
                      High standards and attention to detail ensure our products
                      and services exceed expectations.
                    </p>
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-brand-bi-primary rounded-full flex items-center justify-center mx-auto">
                    <Scale className="h-8 w-8 text-brand-bi-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Integrity</h4>
                    <p className="text-sm text-muted-foreground">
                      Standards of honesty and strong moral principles guide our
                      actions and decisions.
                    </p>
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-brand-bi-primary-foreground rounded-full flex items-center justify-center mx-auto">
                    <HeartHandshake className="h-8 w-8 text-brand-bi-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Respect</h4>
                    <p className="text-sm text-muted-foreground">
                      Respect for diverse perspectives and experiences drives
                      our inclusive design process and outcomes.
                    </p>
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-brand-bi-primary rounded-full flex items-center justify-center mx-auto">
                    <View className="h-8 w-8 text-brand-bi-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Transparency</h4>
                    <p className="text-sm text-muted-foreground">
                      Conduct business ethically and transparently, building
                      trust with our users and stakeholders.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </ComponentSection>

            {/* Brand Architecture */}
            <ComponentSection
              title="Brand Architecture"
              description="How our brand families are organized"
            >
              <div className="space-y-6">
                <div className="border rounded-lg p-6 bg-background">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold">Master Brand</h4>
                    <Badge variant="outline">Single & Multi-Day</Badge>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div>
                      <div className="text-4xl font-bold text-black">
                        <img
                          src={bigironLogo}
                          alt="BigIron Logo"
                          className="w-48 h-20"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The foundational brand that represents our core design
                    system platform and methodology.
                  </p>
                </div>

                <div className="border rounded-lg p-6 bg-background">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold">Secondary Brand</h4>
                    <Badge variant="secondary">Live Auctions</Badge>
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div>
                      <div className="text-xl font-bold text-brand-sul-primary">
                        <img
                          src={sullivanLogo}
                          alt="Sullivan Auctioneers Logo"
                          className="w-48 h-20"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Among the nation's leading Real Estate and Farm Machinery
                    Auctioneers, with over 40 years of experience.
                  </p>
                </div>
              </div>
            </ComponentSection>

            <ComponentSection
              title="Usage Guidelines"
              description="When and how to use each brand"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Brand Consistency</AlertTitle>
                  <AlertDescription>
                    Always maintain consistent application of brand elements
                    across all touchpoints. Each brand should be used in its
                    appropriate context and never mixed with elements from other
                    brands.
                  </AlertDescription>
                </Alert>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Brand Hierarchy</AlertTitle>
                  <AlertDescription>
                    The master brand (Design System) takes precedence in general
                    communications. Sub-brands should be used for specific
                    product communications and always include a reference to the
                    master brand.
                  </AlertDescription>
                </Alert>
              </div>
            </ComponentSection>
          </div>
        ),
      },
      standards: {
        title: "Brand Standards",
        content: (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Brand Standards
              </h2>
              <p className="text-muted-foreground mt-2">
                Logo guidelines, brand colors, and usage standards for our brand
                families
              </p>
            </div>

            <Tabs defaultValue="bigiron" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="bigiron" className="cursor-pointer">
                  BigIron
                </TabsTrigger>
                <TabsTrigger value="sullivan" className="cursor-pointer">
                  Sullivan
                </TabsTrigger>
              </TabsList>

              <TabsContent value="bigiron" className="space-y-8">
                <ComponentSection
                  title="Logo & Mark"
                  description="Design System brand identity and logo usage guidelines"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Primary Logo */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">Primary Logo</h4>
                      <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
                        <div className="flex items-center space-x-2">
                          <div className="text-3xl font-bold text-foreground">
                            <img
                              src={bigironLogo}
                              alt="BigIron Logo"
                              className="w-32 h-12"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Use this version on light backgrounds with sufficient
                        contrast.
                      </p>
                    </div>

                    {/* Logo Mark Only */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">Logo Mark</h4>
                      <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
                        <Bolt className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Standalone mark for small spaces and favicons.
                      </p>
                    </div>

                    {/* Dark Background Version */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">Dark Background</h4>
                      <div className="border rounded-lg p-8 bg-brand-bi-secondary flex items-center justify-center">
                        <div className="flex items-center space-x-3">
                          {/*<Bolt className="h-8 w-8 text-primary" />*/}
                          <div>
                            <div className="text-3xl font-bold text-white">
                              <img
                                src={bigironLogoDark}
                                alt="BigIron Logo"
                                className="w-32 h-12"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Use this version on dark backgrounds.
                      </p>
                    </div>

                    {/* Monochrome Version */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">Monochrome</h4>
                      <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="text-3xl font-bold text-gray-800">
                              <img
                                src={bigironLogoBW}
                                alt="BigIron Logo"
                                className="w-32 h-12"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Single color version for special applications.
                      </p>
                    </div>
                  </div>
                </ComponentSection>

                <ComponentSection
                  title="Brand Colors"
                  description="Primary brand color palette"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      {
                        name: "Brand Gold",
                        class: "bg-primary text-primary-foreground",
                        hex: "#ffcf01",
                        usage: "Primary brand color",
                      },
                      {
                        name: "Brand White",
                        class:
                          "bg-white text-foreground border border-black/20",
                        hex: "#ffffff",
                        usage: "Secondary brand color",
                      },
                      {
                        name: "Brand Dark",
                        class: "bg-brand-bi-secondary text-white",
                        hex: "#0C1218",
                        usage: "Text and dark elements",
                      },
                    ].map((color) => (
                      <div key={color.name} className="space-y-3">
                        <div
                          className={`h-24 rounded-lg ${color.class} flex items-center justify-center shadow-lg`}
                        >
                          <span className="font-medium text-sm">
                            {color.name}
                          </span>
                        </div>
                        <div className="text-sm space-y-1">
                          <p className="font-medium">{color.name}</p>
                          <p className="text-muted-foreground font-mono text-xs">
                            {color.hex}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {color.usage}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ComponentSection>
              </TabsContent>

              <TabsContent value="sullivan" className="space-y-8">
                <ComponentSection
                  title="Logo & Mark"
                  description="Sullivan brand identity and logo usage guidelines"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Primary Logo */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">Primary Logo</h4>
                      <div className="border rounded-lg p-4 bg-background flex items-center justify-center">
                        <div className="flex items-center space-x-3">
                          <img
                            src={sullivanLogo}
                            alt="Sullivan Auctioneers Logo"
                            className="w-48 h-20"
                          />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Use this version on light backgrounds with sufficient
                        contrast.
                      </p>
                    </div>

                    {/* Logo Mark Only */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">Logo Mark</h4>
                      <div className="border rounded-lg p-4 bg-background flex items-center justify-center">
                        <img
                          src={sullivanLogoMark}
                          alt="Sullivan Auctioneers Logo Mark"
                          className="w-20 h-20"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Standalone mark for small spaces and favicons.
                      </p>
                    </div>

                    {/* Dark Background Version */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">Dark Background</h4>
                      <div className="border rounded-lg p-8 bg-gray-900 flex items-center justify-center">
                        <div className="flex items-center space-x-3">
                          <img
                            src={sullivanLogoDark}
                            alt="Sullivan Logo Black and White"
                            className="w-48 h-20"
                          />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Use this version on dark backgrounds.
                      </p>
                    </div>

                    {/* Monochrome Version */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">Monochrome</h4>
                      <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
                        <img
                          src={sullivanLogoBW}
                          alt="Sullivan Logo Black and White"
                          className="w-48 h-20"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Single color version for special applications.
                      </p>
                    </div>
                  </div>
                </ComponentSection>

                <ComponentSection
                  title="Brand Colors"
                  description="Sullivan brand color palette"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      {
                        name: "Brand Blue",
                        class: "bg-brand-sul-primary text-white",
                        hex: "#12284b",
                        usage: "Primary brand color",
                      },
                      {
                        name: "Brand Gold",
                        class: "bg-brand-sul-secondary text-primary-foreground",
                        hex: "#0d9488",
                        usage: "Secondary brand color",
                      },
                      {
                        name: "Brand Dark",
                        class: "bg-brand-bi-secondary text-white",
                        hex: "#0C1218",
                        usage: "Text and dark elements",
                      },
                      {
                        name: "Complimentary Gray",
                        class: "bg-brand-sul-complimentary-gray text-white",
                        hex: "#636466",
                        usage: "Primary brand color",
                      },
                      {
                        name: "Complimentary Light Gray",
                        class:
                          "bg-brand-sul-complimentary-lt-gray text-foreground",
                        hex: "#d9d8d6",
                        usage: "Secondary brand color",
                      },
                      {
                        name: "Complimentary Blue",
                        class: "bg-brand-sul-complimentary-blue text-white",
                        hex: "#6482a7",
                        usage: "Text and dark elements",
                      },
                    ].map((color) => (
                      <div key={color.name} className="space-y-3">
                        <div
                          className={`h-24 rounded-lg ${color.class} flex items-center justify-center shadow-lg`}
                        >
                          <span className="font-medium text-sm">
                            {color.name}
                          </span>
                        </div>
                        <div className="text-sm space-y-1">
                          <p className="font-medium">{color.name}</p>
                          <p className="text-muted-foreground font-mono text-xs">
                            {color.hex}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {color.usage}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ComponentSection>
              </TabsContent>

              {/* Shared Guidelines */}
              <ComponentSection title="Logo Usage Guidelines">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>Do's</AlertTitle>
                    <AlertDescription className="space-y-2">
                      <ul className="text-sm space-y-1">
                        <li>• Maintain clear space around the logo</li>
                        <li>• Use approved color variations</li>
                        <li>• Scale proportionally</li>
                        <li>• Ensure sufficient contrast</li>
                        <li>• Use high-resolution files</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <Alert variant="destructive">
                    <XCircle className="h-4 w-4" />
                    <AlertTitle>Don'ts</AlertTitle>
                    <AlertDescription className="space-y-2">
                      <ul className="text-sm space-y-1">
                        <li>• Don't stretch or distort the logo</li>
                        <li>• Don't use unauthorized colors</li>
                        <li>• Don't place on busy backgrounds</li>
                        <li>• Don't rotate or modify elements</li>
                        <li>• Don't use low-resolution files</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </div>
              </ComponentSection>
            </Tabs>
          </div>
        ),
      },
      personas: {
        title: "Personas",
        content: (
          <div className="space-y-8">
            <ComponentSection
              title="User Personas"
              description="Key user archetypes that guide our design decisions"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                <Card className="overflow-hidden h-full pt-0 gap-2">
                  <CardHeader className="pb-3 px-0">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div
                        className={`relative w-auto h-auto p-0 overflow-hidden flex items-center justify-center text-white font-bold text-lg`}
                      >
                        <img
                          src="../src/assets/expansionist.jpg"
                          alt="The Expansionist"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute -top-14 -right-14 w-16 h-16 bg-stone-500 rounded-full p-2 text-white flex items-center justify-center font-bold text-2xl border-4 border-stone-200 shadow-xl -mt-4">
                          3<sub className="text-sm">%</sub>
                        </div>
                        <CardTitle className="text-sky-700 leading-tight">
                          The Expansionist
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-xs">
                    <div className="space-y-2">
                      <p className="text-gray-700 leading-relaxed">
                        Farmers run their own businesses, and many of them, like
                        any other industry, have their eyes on the horizon. The
                        Expansionist is looking to the operation’s future and
                        wants to expand the farming operation, primarily by
                        obtaining more land. They invest in long-term planning,
                        equipment upgrades, and workforce development to scale
                        production efficiently. This approach often involves
                        securing financing, negotiating land purchases or
                        leases, and adopting conservation practices that
                        increase soil health and productivity over time.
                        Expansionists also monitor market trends and diversify
                        crops or enterprises to spread risk and capitalize on
                        new opportunities.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Here are some of the key things an Expansionist
                        believes:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base italic">
                        <li>Both purchasing and renting more land</li>
                        <li>
                          Diversifying their agricultural products (e.g., crops,
                          livestock, etc.)
                        </li>
                        <li>
                          Growing the farming business and invest profits back
                          into the farm
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden h-full pt-0 gap-2">
                  <CardHeader className="pb-3 px-0">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div
                        className={`w-auto h-auto p-0 overflow-hidden flex items-center justify-center text-white font-bold text-lg`}
                      >
                        <img
                          src="../src/assets/brand-loyalist.jpg"
                          alt="The Brand Loyalist"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute -top-14 -right-14 w-16 h-16 bg-stone-500 rounded-full p-2 text-white flex items-center justify-center font-bold text-2xl border-4 border-stone-200 shadow-lg -mt-4">
                          10<sub className="text-sm">%</sub>
                        </div>
                        <CardTitle className="text-sky-700 leading-tight">
                          The Brand Loyalist
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-xs">
                    <div className="space-y-2">
                      <p className="text-gray-700 leading-relaxed">
                        Never underestimate the power of a reputable brand. That
                        statement is especially true when working with a Brand
                        Loyalist. Once you win over a Brand Loyalist, you’ve got
                        their business for the long haul. But, unfortunately,
                        that also means that if they’re doing business with a
                        competitor, getting them to switch to your product can
                        be tricky.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Here are some of the key things a Brand Loyalist
                        believes:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base italic">
                        <li>
                          The personal relationship is as important as the
                          product itself
                        </li>
                        <li>Brand loyalty benefits the farm </li>
                        <li>
                          Continued business with the same company can provide
                          cost savings and other benefits
                        </li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mt-2">
                        If your sales team is up for a challenge, go after the
                        Brand Loyalist and see if you can convince them to
                        switch over to your products. And know that if you do
                        win them over, they won’t be going anywhere for a long
                        time.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden h-full pt-0 gap-2">
                  <CardHeader className="pb-3 px-0">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div
                        className={`w-auto h-auto p-0 overflow-hidden flex items-center justify-center text-white font-bold text-lg`}
                      >
                        <img
                          src="../src/assets/roi.jpg"
                          alt="Numbers-Focused/ROI"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute -top-14 -right-14 w-16 h-16 bg-stone-500 rounded-full p-2 text-white flex items-center justify-center font-bold text-2xl border-4 border-stone-200 shadow-xl -mt-4">
                          14<sub className="text-sm">%</sub>
                        </div>
                        <CardTitle className="text-sky-700 leading-tight">
                          Numbers-Focused/ROI
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-xs">
                    <div className="space-y-2">
                      <p className="text-gray-700 leading-relaxed">
                        The bottom line is the bottom line. This farmer makes
                        vital decisions based on what will make the most profit
                        and return on investment.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Here are some examples of the Numbers-Focused Farmer’s
                        common day-to-day activities:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base italic">
                        <li>
                          Routinely evaluate the market for the prices of
                          agricultural commodities
                        </li>
                        <li>Assess opportunity costs</li>
                        <li>
                          Monitor inputs and outputs for measuring the technical
                          efficiency of the farm
                        </li>
                        <li>Analyzing and reviewing their financial data</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed">
                        Marketing and selling to a Numbers-Focused Farmer is
                        simple and straightforward. Find the products and
                        services that are going to improve their ROI, and hit
                        that message home with the numbers to back you up.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden h-full pt-0 gap-2">
                  <CardHeader className="pb-3 px-0">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div
                        className={`w-auto h-auto p-0 overflow-hidden flex items-center justify-center text-white font-bold text-lg`}
                      >
                        <img
                          src="../src/assets/sustainable.jpg"
                          alt="The Sustainable Farmer"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute -top-14 -right-14 w-16 h-16 bg-stone-500 rounded-full p-2 text-white flex items-center justify-center font-bold text-2xl border-4 border-stone-200 shadow-xl -mt-4">
                          23<sub className="text-sm">%</sub>
                        </div>
                        <CardTitle className="text-sky-700 leading-tight">
                          The Sustainable Farmer
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-xs">
                    <div className="space-y-2">
                      <p className="text-gray-700 leading-relaxed">
                        The Sustainable Farmer looks to the land. A Sustainable
                        Farmer is driven by the desire to reduce environmental
                        damage and keep the land in optimal condition. They
                        prioritize soil health, water conservation, and
                        biodiversity through practices like cover cropping,
                        reduced tillage, integrated pest management, and
                        rotational grazing. Sustainable Farmers often balance
                        productivity with ecosystem services, investing in
                        renewable energy, habitat restoration, and carbon
                        sequestration practices. Their decisions consider
                        long-term resilience to climate variability, community
                        well-being, and often involve certifications or
                        participation in conservation programs to verify and
                        support sustainable outcomes.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Here are some of the things are Sustainable Farmer might
                        do:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base italic">
                        <li>Maintaining crop diversity and rotations</li>
                        <li>Preventing soil erosion</li>
                        <li>Minimizing climate pollution</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed">
                        When it comes down to it, the Sustainable Farmer
                        believes in both their impact on the environment and
                        their own soil health and fertility. As a result, they
                        are more likely to use cover crops or no-farming and use
                        natural nutrients and biological crop protection.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden h-full pt-0 gap-2">
                  <CardHeader className="pb-3 px-0">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div
                        className={`w-auto h-auto p-0 overflow-hidden flex items-center justify-center text-white font-bold text-lg`}
                      >
                        <img
                          src="../src/assets/agtech.jpg"
                          alt="The AgTech Leader"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute -top-14 -right-14 w-16 h-16 bg-stone-500 rounded-full p-2 text-white flex items-center justify-center font-bold text-2xl border-4 border-stone-200 shadow-xl -mt-4">
                          16<sub className="text-sm">%</sub>
                        </div>
                        <CardTitle className="text-sky-700 leading-tight">
                          The AgTech Leader
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-xs">
                    <div className="space-y-2">
                      <p className="text-gray-700 leading-relaxed">
                        They think often about the evolution of AgTech and how
                        it’s going to change the industry.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        This farmer isn’t just reacting to the changes in
                        technology — they’re on the front lines, focusing on
                        using every tool at their disposal to make their
                        operations more efficient and productive. And with the
                        right tech tools, they can save themselves time and
                        headaches in the process.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Here are some of the things an AgTech Leader might do:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base italic">
                        <li>
                          They believe that adapting and innovating with new
                          technology is required for a farming business to be
                          successful
                        </li>
                        <li>
                          Technology has been a net positive for their farming
                          business and for the industry
                        </li>
                        <li>
                          Monitoring climate variables (precipitation levels,
                          soil temperature, etc.) improves productivity and
                          reduces costs
                        </li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed">
                        If you have a high-tech product or need a market of
                        farmers that you know are innovative by nature, this is
                        the market to go after.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden h-full pt-0 gap-2">
                  <CardHeader className="pb-3 px-0">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div
                        className={`w-auto h-auto p-0 overflow-hidden flex items-center justify-center text-white font-bold text-lg`}
                      >
                        <img
                          src="../src/assets/frugal.jpg"
                          alt="The Frugal Farmer"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute -top-14 -right-14 w-16 h-16 bg-stone-500 rounded-full p-2 text-white flex items-center justify-center font-bold text-2xl border-4 border-stone-200 shadow-xl -mt-4">
                          34<sub className="text-sm">%</sub>
                        </div>
                        <CardTitle className="text-sky-700 leading-tight">
                          The Frugal Farmer
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-xs">
                    <div className="space-y-2">
                      <p className="text-gray-700 leading-relaxed">
                        It’s no secret that being a farmer in today’s economy is
                        challenging. The Frugal Farmer is a product of this
                        environment.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The Frugal Farmer is always looking for ways to cut
                        costs, whether that means finding cheaper inputs,
                        reducing labor costs, or optimizing their operations to
                        be more efficient. Every dollar saved is a dollar that
                        can be reinvested back into the farm.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Here are some of the things a Frugal Farmer might do:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base italic">
                        <li>
                          They look for good deals on equipment, seed, crop
                          protection, etc.
                        </li>
                        <li>
                          They will keep an eye out to cut unnecessary costs
                        </li>
                        <li>
                          If possible, they’ll take a do-it-yourself approach to
                          the bulk of their farm tasks
                        </li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed">
                        Frugal farmers are more likely to use generic inputs
                        than look to see prices online. They are likely not
                        early adopters of technology or anything that requires a
                        long-term payback. They are also more likely to be
                        hands-on in farm decisions or activities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ComponentSection>

            <ComponentSection title="Persona Usage Guidelines">
              <Alert>
                <Users className="h-4 w-4" />
                <AlertTitle>Design with Personas in Mind</AlertTitle>
                <AlertDescription>
                  These personas represent our core user base. Reference them
                  when making design decisions to ensure we're building
                  solutions that meet real user needs and pain points.
                </AlertDescription>
              </Alert>
            </ComponentSection>
          </div>
        ),
      },
      target: {
        title: "Target Audience",
        content: (
          <div className="space-y-8">
            <ComponentSection
              title="Target Audience Personas"
              description="Key user archetypes that guide our design decisions"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 py-0">
                {targets.map((persona, index) => (
                  <Card key={index} className="overflow-hidden h-full pt-0">
                    <CardHeader className="pb-0 px-0">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div
                          className={`w-auto h-auto p-0 overflow-hidden flex items-center justify-center text-white font-bold text-lg`}
                        >
                          <img
                            src={persona.avatar}
                            alt={persona.name}
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div>
                          <CardTitle className="text-base leading-tight">
                            {persona.name}
                          </CardTitle>
                          <CardDescription className="text-xs">
                            {persona.role}
                          </CardDescription>
                          <div className="flex justify-center mt-2">
                            <Badge
                              variant={getTraitVariant(persona.trait)}
                              className="text-xs"
                            >
                              {persona.trait}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3 text-xs">
                      <div className="space-y-1">
                        <div className="space-y-4 mb-4">
                          {/* Quote Bubble */}
                          <div className="relative bg-sky-500 p-2 rounded-2xl space-y-0 text-white shadow-lg">
                            <div className="absolute top-2 left-2 text-3xl opacity-30 rotate-180">
                              <Quote className="h-6 w-6" />
                            </div>
                            <div className="pl-7 pr-0">
                              <p className="text-md font-medium">
                                {persona.quote}
                              </p>
                            </div>
                            <div className="absolute bottom-2 right-2 text-3xl opacity-30">
                              <Quote className="h-6 w-6" />
                            </div>
                            {/* Speech bubble tail */}
                            <div className="absolute -top-2 left-8 w-4 h-4 bg-sky-500 transform rotate-45"></div>
                          </div>
                        </div>
                        <p>
                          <strong>Age:</strong> {persona.age}
                        </p>
                        <p>
                          <strong>Sex:</strong> Male
                        </p>
                        <p>
                          <strong>Experience:</strong> {persona.experience}
                        </p>
                      </div>

                      <div>
                        <p className="text-muted-foreground leading-relaxed">
                          {persona.bio}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h5 className="font-bold text-base text-gray-700 mb-4 flex items-center gap-1">
                            Key Points / Goals
                          </h5>
                          <ul className="space-y-1 text-xl">
                            {persona.goals
                              .slice(0, 3)
                              .map((goal, goalIndex) => (
                                <li
                                  key={goalIndex}
                                  className="flex text-xl items-start gap-2"
                                >
                                  <CheckCircle className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                                  <span className="text-base leading-tight">
                                    {goal}
                                  </span>
                                </li>
                              ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-medium text-xs text-red-700 mb-2 flex items-center gap-1">
                            <XCircle className="h-3 w-3" />
                            Frustrations
                          </h5>
                          <ul className="space-y-1">
                            {persona.frustrations
                              .slice(0, 3)
                              .map((frustration, frustrationIndex) => (
                                <li
                                  key={frustrationIndex}
                                  className="flex items-start gap-2"
                                >
                                  <XCircle className="h-3 w-3 text-red-600 mt-1 flex-shrink-0" />
                                  <span className="text-base leading-tight">
                                    {frustration}
                                  </span>
                                </li>
                              ))}
                          </ul>
                        </div>
                        <hr className="my-4" />
                        <h5 className="font-medium text-xs text-gray-700 mb-1 flex items-center gap-1">
                          <Smartphone className="h-3 w-3" />
                          Preferred Devices
                        </h5>
                        <div className="flex items-end gap-1">
                          {persona.mobile ? (
                            <Smartphone className="h-6 w-6 text-black mt-1 flex-shrink-0  stroke-1" />
                          ) : (
                            <Smartphone className="h-6 w-6 text-gray-300 mt-1 flex-shrink-0  stroke-1" />
                          )}
                          {persona.tablet ? (
                            <Tablet className="h-8 w-8 text-black mt-1 flex-shrink-0  stroke-1" />
                          ) : (
                            <Tablet className="h-8 w-8 text-gray-300 mt-1 flex-shrink-0  stroke-1" />
                          )}
                          {persona.computer ? (
                            <Monitor className="h-9 w-9 text-black mt-1 flex-shrink-0 stroke-1" />
                          ) : (
                            <Monitor className="h-9 w-9 text-gray-500 mt-1 flex-shrink-0 stroke-1" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ComponentSection>

            <ComponentSection title="Persona Usage Guidelines">
              <Alert>
                <Users className="h-4 w-4" />
                <AlertTitle>Design with Personas in Mind</AlertTitle>
                <AlertDescription>
                  These personas represent our core user base. Reference them
                  when making design decisions to ensure we're building
                  solutions that meet real user needs and pain points.
                </AlertDescription>
              </Alert>
            </ComponentSection>
          </div>
        ),
      },
      tone: {
        title: "Voice & Tone",
        content:
          "Configure detailed permissions for different user roles and actions.",
      },
      images: {
        title: "Imagery",
        content:
          "Use images that are clear, well-lit, and free of excessive filters or distracting backgrounds. Maintain consistency in style—favor modern, minimal, and authentic visuals that support content and enhance user understanding. Avoid generic stock photos, overly staged scenes, or images that clash with brand colors. Always ensure images are accessible (provide alt text), optimized for performance, and used in accordance with copyright and licensing guidelines.",
      },
      typography: {
        title: "Typography",
        content: (
          <div className="space-y-8">
            <ComponentSection
              title="Typography Scale"
              description="Consistent text sizing and hierarchy"
            >
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight">
                    Heading 1
                  </h1>
                  <code className="text-sm text-muted-foreground">
                    text-4xl font-bold tracking-tight
                  </code>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">
                    Heading 2
                  </h2>
                  <code className="text-sm text-muted-foreground">
                    text-3xl font-semibold tracking-tight
                  </code>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Heading 3
                  </h3>
                  <code className="text-sm text-muted-foreground">
                    text-2xl font-semibold tracking-tight
                  </code>
                </div>
                <div>
                  <h4 className="text-xl font-semibold tracking-tight">
                    Heading 4
                  </h4>
                  <code className="text-sm text-muted-foreground">
                    text-xl font-semibold tracking-tight
                  </code>
                </div>
                <div>
                  <p className="text-base">
                    Body text - The quick brown fox jumps over the lazy dog.
                  </p>
                  <code className="text-sm text-muted-foreground">
                    text-base
                  </code>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Small text - Additional information and captions.
                  </p>
                  <code className="text-sm text-muted-foreground">
                    text-sm text-muted-foreground
                  </code>
                </div>
              </div>
            </ComponentSection>
            <ComponentSection title="Font Usage Reasoning">
              <Alert>
                <Users className="h-6 w-6" />
                <AlertTitle className="text-lg/5 font-medium mb-3">
                  Design with cleanliness and simplicity in mind
                </AlertTitle>
                <AlertDescription>
                  <p className="text-base mb-3">
                    <strong>Plus Jakarta Sans</strong> is a modern, clean, and
                    highly legible sans-serif typeface. It offers excellent
                    readability across various screen sizes and resolutions,
                    making it ideal for digital interfaces. The font's
                    versatility allows it to be used for both headings and body
                    text, ensuring a consistent typographic hierarchy throughout
                    the application.
                  </p>
                  <p className="text-base mb-3">
                    Additionally, Plus Jakarta Sans has a contemporary aesthetic
                    that aligns well with modern design principles, helping to
                    convey a sense of professionalism and trustworthiness in the
                    user interface. It has humanist proportions (less strictly
                    geometric), open counters, softer terminals, more modulation
                    and subtle calligraphic influence for{" "}
                    <strong>improved legibility</strong>.
                  </p>
                  <p>
                    Slightly lower or more moderate x-height with wider letter
                    spacing and proportions{" "}
                    <strong>
                      optimized for longer reading and UI clarity.
                    </strong>
                  </p>
                </AlertDescription>
              </Alert>
            </ComponentSection>
          </div>
        ),
      },
      figma: {
        title: "Figma",
        content: (
          <div className="space-y-8">
            <ComponentSection
              title="Mockups"
              description="Consistent text sizing and hierarchy"
            >
              <div className="space-y-6">Coming Soon</div>
            </ComponentSection>
          </div>
        ),
      },
      components: {
        title: "Components",
        content: (
          <div className="space-y-8">
            <ComponentSection
              title="Buttons"
              description="Various button styles and states"
            >
              <ComponentDemo title="Button Variants">
                <div className="flex flex-wrap gap-3">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </ComponentDemo>

              <ComponentDemo title="Button Sizes">
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </ComponentDemo>
            </ComponentSection>

            <ComponentSection
              title="Alerts"
              description="Contextual feedback messages"
            >
              <ComponentDemo title="Alert Variants">
                <div className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Info</AlertTitle>
                    <AlertDescription>
                      This is an informational message.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Something went wrong. Please try again.
                    </AlertDescription>
                  </Alert>
                </div>
              </ComponentDemo>
            </ComponentSection>

            <ComponentSection
              title="Cards"
              description="Flexible content containers"
            >
              <ComponentDemo title="Basic Card">
                <div className="max-w-sm">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>
                        Card description goes here.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>This is the main content of the card.</p>
                    </CardContent>
                    <CardFooter>
                      <Button>Action</Button>
                    </CardFooter>
                  </Card>
                </div>
              </ComponentDemo>
            </ComponentSection>

            <ComponentSection
              title="Badges"
              description="Small status indicators"
            >
              <ComponentDemo title="Badge Variants">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </ComponentDemo>
            </ComponentSection>
          </div>
        ),
      },
      forms: {
        title: "Forms",
        content: (
          <div className="space-y-8">
            <ComponentSection
              title="Form Elements"
              description="Input components and form patterns. Use consistent spacing, clear labels, and
                    accessible states for error, success, and disabled. All form
                    controls are built with shadcn/ui and Tailwind CSS for a
                    modern, cohesive look."
            >
              <ComponentDemo title="Basic Inputs">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
              </ComponentDemo>

              <ComponentDemo title="Textarea">
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                  />
                </div>
              </ComponentDemo>

              <ComponentDemo title="Form Controls">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <Label htmlFor="notifications">Enable notifications</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>

                  <RadioGroup defaultValue="option1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="option1" />
                      <Label htmlFor="option1">Option 1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="option2" />
                      <Label htmlFor="option2">Option 2</Label>
                    </div>
                  </RadioGroup>
                </div>
              </ComponentDemo>
            </ComponentSection>
          </div>
        ),
      },
      patterns: {
        title: "Patterns",
        content: (
          <div className="space-y-8">
            <ComponentSection
              title="Layout Patterns"
              description="Common UI patterns and compositions. Use these
                    patterns to organize content, guide user flow, and provide
                    consistent interaction across your application. Each pattern
                    should be responsive, accessible, and easy to customize for
                    different use cases."
            >
              <ComponentDemo title="Header Pattern">
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Page Title</h3>
                      <p className="text-sm text-muted-foreground">
                        Page description
                      </p>
                    </div>
                    <Button>Primary Action</Button>
                  </div>
                </div>
              </ComponentDemo>

              <ComponentDemo title="Stats Grid">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: "Total Users", value: "2,345", change: "+12%" },
                    { label: "Revenue", value: "$45,678", change: "+8%" },
                    { label: "Growth", value: "23%", change: "+3%" },
                  ].map((stat, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <CardDescription>{stat.label}</CardDescription>
                        <CardTitle className="text-2xl">{stat.value}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="secondary">{stat.change}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-medium text-gray-900 mb-3">
                      Quick Stats
                    </h3>
                    <p className="text-3xl font-semibold text-gray-900 mb-1">
                      2,340
                    </p>
                    <p className="text-sm text-gray-500">Total items</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-medium text-gray-900 mb-3">
                      Recent Activity
                    </h3>
                    <p className="text-3xl font-semibold text-gray-900 mb-1">
                      12
                    </p>
                    <p className="text-sm text-gray-500">This week</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-medium text-gray-900 mb-3">
                      Performance
                    </h3>
                    <p className="text-3xl font-semibold text-gray-900 mb-1">
                      98%
                    </p>
                    <p className="text-sm text-gray-500">Success rate</p>
                  </div>
                </div>
              </ComponentDemo>
            </ComponentSection>
          </div>
        ),
      },
    };

    return (
      contentMap[itemId as keyof typeof contentMap] || {
        title: "Page Not Found",
        content: "The requested page could not be found.",
      }
    );
  };

  // Get breadcrumb data
  const getBreadcrumbs = () => {
    for (const section of navigationItems) {
      const subItem = section.subItems.find((sub) => sub.id === activeItem);
      if (subItem) {
        return {
          section: section.title,
          page: subItem.title,
          sectionIcon: section.icon,
        };
      }
    }
    return {
      section: "Dashboard",
      page: "Unknown",
      sectionIcon: Home,
    };
  };
  const currentContent = getPageContent(activeItem);
  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="flex h-screen pt-0 bg-white">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-gray-50 border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between px-4 py-4.5 border-b border-gray-200 lg:justify-start space-x-2">
          {/*          <Bolt className="w-6 h-6 text-primary" /> */}
          <h1 className="text-4xl font-bold text-gray-900">
            <img src={bigironLogo} alt="BigIron Logo" className="w-32 h-10" />
          </h1>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="py-4">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="mb-1">
                {/* Main Navigation Item */}
                <div className="px-4 py-2 mb-1">
                  <div className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <IconComponent className="w-3.5 h-3.5 mr-2" />
                    {item.title}
                  </div>
                </div>

                {/* Sub Navigation Items */}
                <div className="relative ml-4">
                  <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-300"></div>
                  {item.subItems.map((subItem, index) => {
                    const SubIconComponent = subItem.icon;
                    const isActive = activeItem === subItem.id;
                    const isLast = index === item.subItems.length - 1;
                    return (
                      <button
                        key={subItem.id}
                        onClick={() => {
                          setActiveItem(subItem.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`cursor-pointer w-50 text-left px-3 py-2 text-sm transition-all duration-200 ease-in-out flex items-center relative group ${
                          isActive
                            ? "bg-primary text-primary-foreground rounded-md mx-4 shadow-sm"
                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md mx-2"
                        } ${isLast ? "mb-4" : "mb-1"}`}
                      >
                        <div className="w-4 h-4 mr-3 ml-2 relative z-10">
                          <SubIconComponent className="w-4 h-4" />
                        </div>
                        {subItem.title}
                        {isActive && (
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-white rounded-r"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-4 sm:px-6 md:px-8 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 mr-3"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="flex items-center">
                <Bolt className="w-6 h-6 text-primary md:hidden mr-2" />
                <h1 className="text-lg font-medium text-gray-900 md:hidden mr-3">
                  BigIron
                </h1>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    {React.createElement(breadcrumbs.sectionIcon, {
                      className: "w-4 h-7 mr-2",
                    })}
                    <span className="font-medium">{breadcrumbs.section}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 mx-2" />
                  <span className="text-gray-900 font-medium">
                    {breadcrumbs.page}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto bg-gray-50/30">
          <div className="max-w-6xl mx-auto p-8">
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-8">
              <div className="text-gray-600 leading-relaxed text-base">
                {currentContent.content}
              </div>

              {/*             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-medium text-gray-900 mb-3">
                    Quick Stats
                  </h3>
                  <p className="text-3xl font-semibold text-gray-900 mb-1">
                    2,340
                  </p>
                  <p className="text-sm text-gray-500">Total items</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-medium text-gray-900 mb-3">
                    Recent Activity
                  </h3>
                  <p className="text-3xl font-semibold text-gray-900 mb-1">
                    12
                  </p>
                  <p className="text-sm text-gray-500">This week</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-medium text-gray-900 mb-3">
                    Performance
                  </h3>
                  <p className="text-3xl font-semibold text-gray-900 mb-1">
                    98%
                  </p>
                  <p className="text-sm text-gray-500">Success rate</p>
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  return <NavigationLayout />;
}

export default App;
