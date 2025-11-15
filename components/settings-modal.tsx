"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Palette,
  Type,
  Layout,
  Moon,
  Globe,
  Monitor,
  Sun,
  ALargeSmall,
  AArrowDown,
  AArrowUp,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  usePreferences,
  useTranslation,
  type Preferences,
  type AccentColor,
  type FontSize,
} from "@/lib/preferences-context";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { preferences, updatePreferences } = usePreferences();
  const { t } = useTranslation();

  const [localPreferences, setLocalPreferences] =
    useState<Preferences>(preferences);

  useEffect(() => {
    if (isOpen) {
      setLocalPreferences(preferences);
    }
  }, [isOpen, preferences]);

  const handleSave = () => {
    updatePreferences(localPreferences);
    onClose();
  };

  const handleCancel = () => {
    setLocalPreferences(preferences);
    onClose();
  };

  const updateLocal = <K extends keyof Preferences>(
    key: K,
    value: Preferences[K]
  ) => {
    setLocalPreferences((prev) => ({ ...prev, [key]: value }));
  };

  // OPTIMIZACIÓN: Mover arrays fuera del render con useMemo
  const accentColors = useMemo(
    () =>
      [
        { name: "Red", value: "red" as AccentColor, color: "bg-red-500" },
        { name: "Blue", value: "blue" as AccentColor, color: "bg-blue-500" },
        { name: "Green", value: "green" as AccentColor, color: "bg-green-500" },
        { name: "Purple", value: "purple" as AccentColor, color: "bg-purple-500" },
        { name: "Orange", value: "orange" as AccentColor, color: "bg-orange-500" },
      ],
    []
  );

  const fontSizes = useMemo(
    () =>
      [
        { name: "small" as FontSize, icon: AArrowDown },
        { name: "medium" as FontSize, icon: ALargeSmall },
        { name: "large" as FontSize, icon: AArrowUp },
      ],
    []
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OPTIMIZACIÓN: Backdrop SIN blur, más opacidad */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-black/85"
            onClick={handleCancel}
          />

          {/* OPTIMIZACIÓN: Modal con animaciones más rápidas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl sm:rounded-3xl shadow-2xl pointer-events-auto">
              {/* Header */}
              <div className="sticky top-0 bg-card border-b border-border px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between z-10">
                <h2 className="text-xl sm:text-2xl font-bold">{t("settings")}</h2>
                <button
                  onClick={handleCancel}
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-secondary hover:bg-secondary/80 transition-all flex items-center justify-center"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
                {/* Theme Section */}
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <h3 className="text-base sm:text-lg font-semibold">
                      {t("theme")}
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <button
                      onClick={() => updateLocal("theme", "system")}
                      className={`rounded-lg sm:rounded-xl border-2 p-3 sm:p-4 transition-all ${
                        localPreferences.theme === "system"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Monitor className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-1" />
                      <div className="font-medium text-sm sm:text-base">
                        {t("systemMode")}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Auto
                      </div>
                    </button>
                    <button
                      onClick={() => updateLocal("theme", "dark")}
                      className={`rounded-lg sm:rounded-xl border-2 p-3 sm:p-4 transition-all ${
                        localPreferences.theme === "dark"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Moon className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-1" />
                      <div className="font-medium text-sm sm:text-base">
                        {t("darkMode")}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Dark
                      </div>
                    </button>
                    <button
                      onClick={() => updateLocal("theme", "light")}
                      className={`rounded-lg sm:rounded-xl border-2 p-3 sm:p-4 transition-all ${
                        localPreferences.theme === "light"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Sun className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-1" />
                      <div className="font-medium text-sm sm:text-base">
                        {t("lightMode")}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Light
                      </div>
                    </button>
                  </div>
                </div>

                {/* Language Section */}
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <h3 className="text-base sm:text-lg font-semibold">
                      {t("language")}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <button
                      onClick={() => updateLocal("language", "en")}
                      className={`rounded-lg sm:rounded-xl border-2 p-3 sm:p-4 transition-all ${
                        localPreferences.language === "en"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="font-medium text-sm sm:text-base">English</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        EN
                      </div>
                    </button>
                    <button
                      onClick={() => updateLocal("language", "es")}
                      className={`rounded-lg sm:rounded-xl border-2 p-3 sm:p-4 transition-all ${
                        localPreferences.language === "es"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="font-medium text-sm sm:text-base">Español</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        ES
                      </div>
                    </button>
                  </div>
                </div>

                {/* Layout Preferences */}
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Layout className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <h3 className="text-base sm:text-lg font-semibold">
                      {t("layoutPreferences")}
                    </h3>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between rounded-lg sm:rounded-xl border border-border p-3 sm:p-4">
                      <span className="font-medium text-sm sm:text-base">
                        {t("animations")}
                      </span>
                      <button
                        onClick={() =>
                          updateLocal(
                            "animationsEnabled",
                            !localPreferences.animationsEnabled
                          )
                        }
                        className={`rounded-md sm:rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm transition-colors ${
                          localPreferences.animationsEnabled
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {localPreferences.animationsEnabled
                          ? t("enabled")
                          : t("disabled")}
                      </button>
                    </div>
                    <div className="flex items-center justify-between rounded-lg sm:rounded-xl border border-border p-3 sm:p-4">
                      <span className="font-medium text-sm sm:text-base">
                        {t("sidebarAutoExpand")}
                      </span>
                      <button
                        onClick={() =>
                          updateLocal(
                            "sidebarAutoExpand",
                            !localPreferences.sidebarAutoExpand
                          )
                        }
                        className={`rounded-md sm:rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm transition-colors ${
                          localPreferences.sidebarAutoExpand
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {localPreferences.sidebarAutoExpand
                          ? t("enabled")
                          : t("disabled")}
                      </button>
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <Type className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        <h4 className="text-sm sm:text-base font-semibold">
                          {t("fontSize")}
                        </h4>
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {fontSizes.map(({ name, icon: Icon }) => (
                          <button
                            key={name}
                            onClick={() => updateLocal("fontSize", name)}
                            className={`rounded-lg sm:rounded-xl border-2 p-3 sm:p-4 transition-all ${
                              localPreferences.fontSize === name
                                ? "border-primary bg-primary/10"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-1" />
                            <div className="font-medium text-sm sm:text-base capitalize">
                              {t(name)}
                            </div>
                            <div className="text-xs sm:text-sm text-muted-foreground capitalize">
                              {name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
      {/*
                {/* Fun Section 
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <h3 className="text-base sm:text-lg font-semibold">{t("fun")}</h3>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      <h4 className="text-sm sm:text-base font-semibold">
                        {t("accentColor")}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {accentColors.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => updateLocal("accentColor", color.value)}
                          className={`flex items-center gap-2 rounded-lg sm:rounded-xl border-2 px-3 py-2 sm:px-4 sm:py-3 transition-all ${
                            localPreferences.accentColor === color.value
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div
                            className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full ${color.color}`}
                          />
                          <span className="font-medium text-sm sm:text-base">
                            {color.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                */}
              </div>
      
              {/* Footer */}
              <div className="sticky bottom-0 bg-card border-t border-border px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-end gap-2 sm:gap-3">
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  className="rounded-lg sm:rounded-xl bg-transparent text-sm sm:text-base"
                >
                  {t("cancel")}
                </Button>
                <Button
                  onClick={handleSave}
                  className="rounded-lg sm:rounded-xl text-sm sm:text-base"
                >
                  {t("saveChanges")}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
