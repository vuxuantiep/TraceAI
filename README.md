# Sovereign AI Cockpit

Frontend für eine souveräne, lokal betriebene KI-Plattform (Dark-Mode-Design), gebaut mit Next.js 15, React 19 und Tailwind CSS 4.

## Features

- Chat-Oberfläche mit Anbindung an lokale KI-Modelle
- **Ollama-Integration** (`/api/ollama`): führt Prompts über die lokale Ollama-CLI aus (Standard-Modell: `qwen2.5-coder`)
- **Lokaler Modell-Proxy** (`/api/local-model`): leitet Anfragen an einen beliebigen lokalen Inferenz-Endpoint weiter (z. B. Hermes), mit Mock-Fallback für die Entwicklung

## Projektstruktur

```
app/            Next.js App Router (Seiten, Layout, API-Routen)
  api/
    local-model/  Proxy zu lokalem Inferenz-Endpoint
    ollama/       Ollama-CLI-Anbindung
hooks/          React-Hooks
lib/            Hilfsfunktionen
server/         Mock-Server für lokale Entwicklung (Hermes-Mock)
```

## Lokal starten

**Voraussetzungen:** Node.js 20+

1. Abhängigkeiten installieren:
   ```
   npm install
   ```
2. Umgebungsvariablen konfigurieren (optional, siehe [.env.example](.env.example)):
   ```
   copy .env.example .env.local
   ```
3. Dev-Server starten:
   ```
   npm run dev
   ```
   Die App läuft dann unter http://localhost:3000.

## Lokale KI-Modelle

- **Ollama:** `npm run ollama:serve` startet Ollama, `npm run ollama:pull:qwen2.5-coder` lädt das Standard-Modell. Der Pfad zur Ollama-CLI wird über `OLLAMA_PATH` konfiguriert.
- **Hermes-Mock:** `npm run mock:hermes` startet einen Mock-Inferenz-Server für die Entwicklung; `LOCAL_MODEL_URL` zeigt auf dessen Endpoint.

## Build & Produktion

```
npm run build
npm start
```

Der Build ist als `standalone` konfiguriert und damit gut für Container-Deployments geeignet.
