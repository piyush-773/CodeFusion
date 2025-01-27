import React, { useEffect } from "react";
import Select from "react-select";

const SettingsPanel = ({
    language,
    setLanguage,
    theme,
    setTheme,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
}) => {
    const languages = [
        { value: "javascript", label: "JavaScript" },
        { value: "python", label: "Python" },
        { value: "cpp", label: "C++" },
        { value: "java", label: "Java" },
        { value: "c", label: "C" },
        { value: "ruby", label: "Ruby" },
        { value: "go", label: "Go" },
        { value: "swift", label: "Swift" },
        { value: "php", label: "PHP" },
        { value: "typescript", label: "TypeScript" },
        { value: "rust", label: "Rust" },
        { value: "kotlin", label: "Kotlin" },
        { value: "scala", label: "Scala" },
        { value: "perl", label: "Perl" },
        { value: "r", label: "R" },
        { value: "dart", label: "Dart" },
        { value: "bash", label: "Bash" },
        { value: "sql", label: "SQL" },
        { value: "html", label: "HTML" },
        { value: "css", label: "CSS" },
        { value: "shell", label: "Shell" },
    ];

    const themes = [
        { value: "vs", label: "Visual Studio Light" },
        { value: "vs-dark", label: "Visual Studio Dark" },
        { value: "hc-black", label: "High Contrast" },
        { value: "solarized-dark", label: "Solarized Dark" },
        { value: "solarized-light", label: "Solarized Light" },
    ];

    const fonts = [
        { value: "monospace", label: "Monospace" },
        { value: "Courier New", label: "Courier New" },
        { value: "Cascadia Code", label: "Cascadia Code" },
        { value: "Lucida Console", label: "Lucida Console" },
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
                    defaultValue={languages.find((l) => l.value === language)}
                    onChange={(e) => setLanguage(e.value)}
                    className="text-black"
                />
            </div>

            {/* Theme Selector */}
            <div>
                <label className="block font-semibold mb-1">Theme:</label>
                <Select
                    options={themes}
                    defaultValue={themes.find((t) => t.value === theme)}
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
                    defaultValue={fonts.find((f) => f.value === fontFamily)}
                    onChange={(e) => setFontFamily(e.value)}
                    className="text-black"
                />
            </div>
        </div>
    );
};

export default SettingsPanel;
