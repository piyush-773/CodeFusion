const dummyCode = {
    javascript: `// JavaScript Dummy Code
  function greet(name) {
    return "Welcome to CodeFusion, " + name + "!";
  }
  
  console.log(greet("User"));`,
    python: `# Python Dummy Code
  def greet(name):
      return "Welcome to CodeFusion, " + name + "!"
  
  print(greet("User"))`,
    cpp: `// C++ Dummy Code
  #include <iostream>
  using namespace std;
  
  int main() {
      string name = "User";
      cout << "Welcome to CodeFusion, " << name << "!" << endl;
      return 0;
  }`,
    java: `// Java Dummy Code
  public class Main {
      public static void main(String[] args) {
          String name = "User";
          System.out.println("Welcome to CodeFusion, " + name + "!");
      }
  }`,
    c: `// C Dummy Code
  #include <stdio.h>
  
  int main() {
      char name[] = "User";
      printf("Welcome to CodeFusion, %s!\n", name);
      return 0;
  }`,
    ruby: `# Ruby Dummy Code
  def greet(name)
    return "Welcome to CodeFusion, #{name}!"
  end
  
  puts greet("User")`,
    go: `// Go Dummy Code
  package main
  
  import "fmt"
  
  func main() {
      name := "User"
      fmt.Println("Welcome to CodeFusion, " + name + "!")
  }`,
    swift: `// Swift Dummy Code
  func greet(name: String) -> String {
      return "Welcome to CodeFusion, \(name)!"
  }
  
  print(greet(name: "User"))`,
    php: `<?php
  // PHP Dummy Code
  function greet($name) {
      return "Welcome to CodeFusion, " . $name . "!";
  }
  
  echo greet("User");
  ?>`,
    typescript: `// TypeScript Dummy Code
  function greet(name: string): string {
      return "Welcome to CodeFusion, " + name + "!";
  }
  
  console.log(greet("User"));`,
    rust: `// Rust Dummy Code
  fn greet(name: &str) -> String {
      return format!("Welcome to CodeFusion, {}!", name);
  }
  
  fn main() {
      println!("{}", greet("User"));
  }`,
    kotlin: `// Kotlin Dummy Code
  fun greet(name: String): String {
      return "Welcome to CodeFusion, $name!"
  }
  
  fun main() {
      println(greet("User"))
  }`,
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
    r: `# R Dummy Code
  greet <- function(name) {
    return(paste("Welcome to CodeFusion,", name, "!"))
  }
  
  print(greet("User"))`,
    dart: `// Dart Dummy Code
  String greet(String name) {
    return "Welcome to CodeFusion, $name!";
  }
  
  void main() {
    print(greet("User"));
  }`,
    bash: `# Bash Dummy Code
  name="User"
  echo "Welcome to CodeFusion, $name!"`,
    sql: `-- SQL Dummy Code
  SELECT 'Welcome to CodeFusion, User!';`,
    html: `<!-- HTML Dummy Code -->
  <!DOCTYPE html>
  <html>
  <head>
      <title>Welcome to CodeFusion</title>
  </head>
  <body>
      <h1>Welcome to CodeFusion</h1>
  </body>
  </html>`,
    css: `/* CSS Dummy Code */
  body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      text-align: center;
      padding: 50px;
  }
  
  h1 {
      color: #333;
  }`,
    shell: `# Shell Dummy Code
  name="User"
  echo "Welcome to CodeFusion, $name!"`,
};
