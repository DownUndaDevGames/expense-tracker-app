# Expense Tracker (React Native + SQLite)

A cross-platform (iOS/Android) expense tracker built with **Expo/React Native** and **SQLite**. Track expenses, manage categories, view monthly summaries, and export CSV reports — all fully offline.

## Features
- Add, edit, and delete expenses
- Category management with color tags
- Monthly total summary
- Reports screen with per‑category totals
- Export to CSV via the system share sheet
- Local-first: data stored in a device SQLite database
- Clean TypeScript codebase and simple UI components

## Tech Stack
- **Expo / React Native**
- **TypeScript**
- **expo-sqlite** for the local database
- **React Navigation** (stack + tabs)
- **react-native-svg** for simple charts
- **date-fns** for date utilities
- **expo-file-system** and **expo-sharing** for CSV export

## Quickstart
```bash
npm install

# Run (choose a platform in the Expo dev UI)
npx expo start
# or from the CLI: press 'i' for iOS simulator, 'a' for Android emulator
```

## Usage
### Add an expense
1. Open the **Expenses** tab.
2. Tap **Add Expense**.
3. Enter an amount, pick a category, and (optionally) add a note.
4. Save — the item appears in the list.

### Edit or delete an expense
1. Tap any expense in the **Expenses** list.
2. Update fields and **Save**, or **Delete** to remove it.

### Manage categories
1. Open the **Categories** tab.
2. Add a category name and a color (hex), then **Add**.
3. Delete categories you no longer need.

### View reports & export CSV
1. Open the **Reports** tab to see totals per category for the current month.
2. Tap **Export CSV** to generate a CSV and open the platform share sheet.

## Scripts
- `npm start` – start Expo dev server
- `npm run android` – run on Android emulator/device
- `npm run ios` – run on iOS simulator/device
- `npm run web` – run on web (experimental)