import * as FileSystem from 'expo-file-system';

// Base directory for data files
const dataDir = `${FileSystem.documentDirectory}data/`;
const notesFile = `${dataDir}notes.json`;
const chatsFile = `${dataDir}chats.json`;

// Ensure the data directory exists
async function ensureDirExists() {
  const dirInfo = await FileSystem.getInfoAsync(dataDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(dataDir, { intermediates: true });
  }
}

// Read data from a file, initialize with default if it doesn't exist
async function readData(file, defaultData = []) {
  await ensureDirExists();
  const fileInfo = await FileSystem.getInfoAsync(file);
  if (!fileInfo.exists) {
    await FileSystem.writeAsStringAsync(file, JSON.stringify(defaultData));
    return defaultData;
  }
  const content = await FileSystem.readAsStringAsync(file);
  return JSON.parse(content);
}

// Write data to a file
async function writeData(file, data) {
  await ensureDirExists();
  await FileSystem.writeAsStringAsync(file, JSON.stringify(data, null, 2));
}

// Notes-specific functions
export async function getNotes() {
  return await readData(notesFile);
}

export async function saveNotes(notes) {
  await writeData(notesFile, notes);
}

// Chats-specific functions
export async function getChats() {
  return await readData(chatsFile);
}

export async function saveChats(chats) {
  await writeData(chatsFile, chats);
}