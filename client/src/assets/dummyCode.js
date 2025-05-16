const dummyCode = {
  bash: `# Bash Dummy Code
name="User"
echo "Welcome to CodeFusion, $name!"`,

  c: `// C Dummy Code
#include <stdio.h>

int main() {
    char name[] = "User";
    printf("Welcome to CodeFusion, %s!\\n", name);
    return 0;
}`,

  cpp: `// C++ Dummy Code
#include <iostream>
using namespace std;

int main() {
    string name = "User";
    cout << "Welcome to CodeFusion, " << name << "!" << endl;
    return 0;
}`,

  csharp: `// C# Dummy Code
using System;

class Program {
    static void Main() {
        string name = "User";
        Console.WriteLine("Welcome to CodeFusion, " + name + "!");
    }
}`,

  java: `// Java Dummy Code
public class Main {
    public static void main(String[] args) {
        String name = "User";
        System.out.println("Welcome to CodeFusion, " + name + "!");
    }
}`,

  javascript: `// JavaScript Dummy Code
function greet(name) {
  return "Welcome to CodeFusion, " + name + "!";
}

console.log(greet("User"));`,

  python: `# Python Dummy Code
def greet(name):
    return "Welcome to CodeFusion, " + name + "!"

print(greet("User"))`,

  ruby: `# Ruby Dummy Code
def greet(name)
  return "Welcome to CodeFusion, #{name}!"
end

puts greet("User")`,

  rust: `// Rust Dummy Code
fn greet(name: &str) -> String {
    return format!("Welcome to CodeFusion, {}!", name);
}

fn main() {
    println!("{}", greet("User"));
}`,

  typescript: `// TypeScript Dummy Code
function greet(name: string): string {
    return "Welcome to CodeFusion, " + name + "!";
}

console.log(greet("User"));`,

  go: `// Go Dummy Code
package main

import "fmt"

func main() {
    name := "User"
    fmt.Println("Welcome to CodeFusion, " + name + "!")
}`,

  php: `<?php
// PHP Dummy Code
function greet($name) {
    return "Welcome to CodeFusion, " . $name . "!";
}

echo greet("User");
?>`,

  kotlin: `// Kotlin Dummy Code
fun greet(name: String): String {
    return "Welcome to CodeFusion, $name!"
}

fun main() {
    println(greet("User"))
}`,

  r: `# R Dummy Code
greet <- function(name) {
  return(paste("Welcome to CodeFusion,", name, "!"))
}

print(greet("User"))`,

  scala: `// Scala Dummy Code
object Main {
  def greet(name: String): String = {
    return "Welcome to CodeFusion, " + name + "!"
  }

  def main(args: Array[String]): Unit = {
    println(greet("User"))
  }
}`,

  perl: `# Perl Dummy Code
sub greet {
    my ($name) = @_;
    return "Welcome to CodeFusion, $name!";
}

print greet("User");`,

  dart: `// Dart Dummy Code
String greet(String name) {
  return "Welcome to CodeFusion, $name!";
}

void main() {
  print(greet("User"));
}`,

 sql: `-- SQL Dummy Code
SELECT 'Welcome to CodeFusion, User!' AS greeting;`,

  swift: `// Swift Dummy Code
func greet(name: String) -> String {
    return "Welcome to CodeFusion, \\(name)!"
}

print(greet(name: "User"))`,

  elixir: `# Elixir Dummy Code
defmodule Greeting do
  def greet(name) do
    "Welcome to CodeFusion, #{name}!"
  end
end

IO.puts Greeting.greet("User")`,

  haskell: `-- Haskell Dummy Code
greet :: String -> String
greet name = "Welcome to CodeFusion, " ++ name ++ "!"

main :: IO ()
main = putStrLn (greet "User")`,

  lua: `-- Lua Dummy Code
function greet(name)
  return "Welcome to CodeFusion, " .. name .. "!"
end

print(greet("User"))`,

  "typescript-node": `// TypeScript Node Dummy Code
function greet(name: string): string {
    return "Welcome to CodeFusion, " + name + "!";
}

console.log(greet("User"));`,

  shell: `# Shell Dummy Code
name="User"
echo "Welcome to CodeFusion, $name!"`,
};

export default dummyCode;
