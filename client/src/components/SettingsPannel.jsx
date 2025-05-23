import React, { useEffect } from "react";
import Select from "react-select";

const SettingsPanel = ({
    language,
    setLanguageId,
    setLanguage,
    theme,
    setTheme,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
}) => {
    const languages = [
        { value: "bash", label: "Bash", language_id: 46 },
        { value: "c", label: "C", language_id: 50 },
        { value: "cpp", label: "C++", language_id: 54 },
        { value: "csharp", label: "C#", language_id: 51 },
        { value: "java", label: "Java", language_id: 62 },
        { value: "javascript", label: "JavaScript", language_id: 63 },
        { value: "python", label: "Python", language_id: 71 },
        { value: "ruby", label: "Ruby", language_id: 72 },
        { value: "rust", label: "Rust", language_id: 73 },
        { value: "typescript", label: "TypeScript", language_id: 74 },
        { value: "go", label: "Go", language_id: 60 },
        { value: "php", label: "PHP", language_id: 68 },
        { value: "kotlin", label: "Kotlin", language_id: 78 },
        { value: "r", label: "R", language_id: 80 },
        { value: "scala", label: "Scala", language_id: 81 },
        { value: "sql", label: "SQL", language_id: 82 },
        { value: "swift", label: "Swift", language_id: 83 },
        { value: "dart", label: "Dart", language_id: 84 },
        { value: "perl", label: "Perl", language_id: 85 },
        { value: "elixir", label: "Elixir", language_id: 57 },
        { value: "haskell", label: "Haskell", language_id: 61 },
        { value: "lua", label: "Lua", language_id: 64 },
        { value: "shell", label: "Shell", language_id: 94 },
    ];

    const themes = [
        { value: "vs", label: "Visual Studio Light" },
        { value: "vs-dark", label: "Visual Studio Dark" },
        { value: "hc-black", label: "High Contrast" },
        { value: "solarized-dark", label: "Solarized Dark" },
        { value: "solarized-light", label: "Solarized Light" },
        { value: "monokai", label: "Monokai" },
        { value: "quietlight", label: "Quiet Light" },
    ];

    const fonts = [
        { value: "monospace", label: "Monospace" },
        { value: "Courier New", label: "Courier New" },
        { value: "Cascadia Code", label: "Cascadia Code" },
        { value: "Lucida Console", label: "Lucida Console" },
        { value: "Fira Code", label: "Fira Code" },
        { value: "Source Code Pro", label: "Source Code Pro" },
    ];

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className="p-4 flex justify-around rounded-xl shadow-md space-y-4">
            {/* Language Selector */}
            <div>
                <label className="block font-semibold mb-1">Language:</label>
                <Select
                    options={languages}
                    value={languages.find((l) => l.value === language)}
                    onChange={(e) => {
                        setLanguage(e.value);
                        setLanguageId(e.language_id);
                    }}
                    className="text-black"
                />
            </div>

            {/* Theme Selector */}
            <div>
                <label className="block font-semibold mb-1">Theme:</label>
                <Select
                    options={themes}
                    value={themes.find((t) => t.value === theme)}
                    onChange={(e) => setTheme(e.value)}
                    className="text-black"
                />
            </div>

            {/* Font Size Input */}
            <div>
                <label className="block font-semibold mb-1">Font Size:</label>
                <input
                    type="number"
                    min="12"
                    max="36"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="border p-1 rounded w-full"
                />
            </div>

            {/* Font Family Selector */}
            <div>
                <label className="block font-semibold mb-1">Font Style:</label>
                <Select
                    options={fonts}
                    value={fonts.find((f) => f.value === fontFamily)}
                    onChange={(e) => setFontFamily(e.value)}
                    className="text-black"
                />
            </div>
        </div>
    );
};

export default SettingsPanel;
