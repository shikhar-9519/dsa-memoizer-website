import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Brain,
  Calendar,
  CheckCircle,
  Chrome,
  Code2,
  Repeat,
  Timer,
} from "lucide-react";
import { CHROME_EXTENSION_LINK, VIDEO_SOLN_CHROME_EXTENSION_LINK } from "./lib/constants";
import { useState } from "react";

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 px-4 md:px-6">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Brain className="h-6 w-6 text-purple-600" />
            <span>DSA Memoizer</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button
                variant="default"
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => window.open(CHROME_EXTENSION_LINK, "_blank")}
              >
                <Chrome className="mr-2 h-4 w-4" />
                Add to Chrome
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Build Real DSA Mastery,
                    <br />
                    Not Just Streaks
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Turn "I saw the solution" into "I own the solution" with a
                    smart reminder system for LeetCode and GeeksforGeeks.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => window.open(CHROME_EXTENSION_LINK, "_blank")}
                  >
                    <Chrome className="mr-2 h-5 w-5" />
                    Add to Chrome
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="#how-it-works">Learn More</a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center relative">
                {!isVideoLoaded && (
                  <img
                    src="/hero_image.jpg"
                    alt="Video Placeholder"
                    className="absolute inset-0 w-full h-full object-cover blur-md"
                  />
                )}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className={`background-video ${
                    isVideoLoaded ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500`}
                  onCanPlay={() => setIsVideoLoaded(true)}
                >
                  <source src="/hero_video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 dark:bg-purple-800/30 dark:text-purple-400">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Spaced Repetition for DSA Problems
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  DSA Memoizer uses the science of spaced repetition to help you
                  truly master algorithms and data structures.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 h-20 w-20">
                  <div className="absolute transform rotate-45 bg-purple-600 text-center text-white font-medium py-1 right-[-40px] top-[32px] w-[170px]">
                    Step 1
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-purple-600" />
                    Mark for Review
                  </CardTitle>
                  <CardDescription>
                    When you need help solving a problem
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Whenever you take help (watch a video, read the solution, or
                    peek at the code), just click the "Mark for Review" button.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 h-20 w-20">
                  <div className="absolute transform rotate-45 bg-purple-600 text-center text-white font-medium py-1 right-[-40px] top-[32px] w-[170px]">
                    Step 2
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Timer className="h-5 w-5 text-purple-600" />
                    Wait 4 Days
                  </CardTitle>
                  <CardDescription>
                    Let your brain process the information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The extension will automatically remind you after 4 days to
                    try solving it again — this time without help.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 h-20 w-20">
                  <div className="absolute transform rotate-45 bg-purple-600 text-center text-white font-medium py-1 right-[-40px] top-[32px] w-[170px]">
                    Step 3
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                    Solve Again
                  </CardTitle>
                  <CardDescription>Cement your understanding</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Solve the problem from memory. Mark as solved or schedule
                    another review if needed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 dark:bg-purple-800/30 dark:text-purple-400">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need to Master DSA
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Simple, effective tools to build a consistent practice habit.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col items-start gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-800/30">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Today's Problems List</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Open the extension every day and solve the problems listed for
                  today first. That's your revision plan, built by you and timed
                  perfectly.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-800/30">
                  <Repeat className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Spaced Repetition</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Problems appear exactly when you need to review them, based on
                  proven memory retention techniques.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-800/30">
                  <Chrome className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">
                  Works with Popular Platforms
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Seamlessly integrates with LeetCode and GeeksforGeeks with a
                  simple floating button on problem pages.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-800/30">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Privacy First</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Everything is stored locally in your browser. No login, no
                  data collection.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="download"
          className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Master DSA?
                </h2>
                <p className="max-w-[600px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Add DSA Memoizer to Chrome today and transform how you learn
                  algorithms.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-purple-50"
                  onClick={() => window.open(CHROME_EXTENSION_LINK, "_blank")}
                >
                  <Chrome className="mr-2 h-5 w-5" />
                  Add to Chrome
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 dark:bg-purple-800/30 dark:text-purple-400">
                    About the Developer
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Built by a Developer, for Developers
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Hi, I'm a software engineer passionate about creating tools
                    that help developers learn and grow. I built DSA Memoizer
                    after struggling with the same problem myself - seeing
                    solutions but not truly mastering them.
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    My goal is to create simple, effective tools that solve real
                    problems for developers. If you have any feedback or
                    suggestions, I'd love to hear from you!
                  </p>
                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/shikhar-gupta-98a15b197/",
                          "_blank"
                        )
                      }
                    >
                      <img
                        src="/linkedin_icon.png"
                        alt="Linkedin icon"
                        width={24}
                        height={24}
                      />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/@5minutescode",
                          "_blank"
                        )
                      }
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                        alt="Youtube icon"
                        width={24}
                        height={24}
                      />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        window.open("https://github.com/shikhar-9519", "_blank")
                      }
                    >
                      <img
                        src="https://github.githubassets.com/favicons/favicon.svg"
                        alt="Linkedin icon"
                        width={24}
                        height={24}
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/my_pic.jpeg"
                    alt="Developer profile"
                    width={400}
                    height={400}
                    className="aspect-square object-cover rounded-xl border shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Extension Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 dark:bg-purple-800/30 dark:text-purple-400">
                  More Tools
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Check Out My Other Extensions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Tools built with the same attention to detail and focus on
                  developer productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Card className="overflow-hidden">
                <div className="md:grid md:grid-cols-2">
                  <div className="bg-purple-600 p-6 flex items-center justify-center">
                    <img
                      src="/dsa_tutorial_demo.jpg"
                      alt="Hero Image"
                      width={400}
                      height={400}
                      className="aspect-[4/3] object-cover rounded-xl shadow-md"
                    />
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl font-bold mb-2">
                      DSA Video Solutions
                    </CardTitle>
                    <CardDescription className="text-lg mb-4">
                      It adds a "Watch Tutorial" button directly on the Leetcode
                      and GeeksforGeeks pages.
                    </CardDescription>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                        <p className="text-gray-500 dark:text-gray-400">
                          Saves time by automatically fetching the right YouTube
                          tutorial for each problem.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                        <p className="text-gray-500 dark:text-gray-400">
                          Avoids distractions by letting you watch tutorials
                          without ever leaving the problem page.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                        <p className="text-gray-500 dark:text-gray-400">
                          Absolutely free to use—just install and start learning
                          instantly.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button
                        variant="default"
                        className="bg-purple-600 hover:bg-purple-700"
                        onClick={() =>
                          window.open(VIDEO_SOLN_CHROME_EXTENSION_LINK, "_blank")
                        }
                      >
                        <Chrome className="mr-2 h-4 w-4" />
                        Add to Chrome
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex gap-2 items-center text-lg font-semibold">
            <Brain className="h-5 w-5 text-purple-600" />
            <span>DSA Memoizer</span>
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()} DSA Memoizer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
