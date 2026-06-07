import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import GradientBackground from "../Components/GradientBackground";
import SecondaryNav from "../Components/SecondaryNav";
import SongList from "../Components/SongList";
import MiniPlayer from "../Components/MiniPlayer";
import { useAudioPlayer } from "expo-audio";
import { COLORS } from "../Constants/theme";
import Feather from "@expo/vector-icons/Feather";
import ConfirmModal from "../Components/ConfirmModal";
export default function Index() {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [pendingDelete, setPendingDelete] = useState(null);
  const [activeSong, setActiveSong] = useState(null);
  const [songs, setSongs] = useState([]);
  const audioSource = activeSong?.uri ? { uri: activeSong.uri } : null;
  const player = useAudioPlayer(audioSource);
  function handleRequestDelete(deleteData) {
    setPendingDelete(deleteData);
    setOpenConfirmModal(true);
  }

  async function handleConfirmDelete() {
    if (pendingDelete?.onConfirm) {
      await pendingDelete.onConfirm();
    }

    setOpenConfirmModal(false);
    setPendingDelete(null);
  }
  async function playSong() {
    if (!activeSong?.uri) return;

    try {
      player.play();
    } catch (err) {
      console.log("Play error:", err);
    }
  }
  function playNextSong() {
    if (!songs.length || !activeSong) return;
    const currentIndex = songs.findIndex((song) => song.id === activeSong.id);
    const nextIndex = currentIndex === songs.length - 1 ? 0 : currentIndex + 1;
    setActiveSong(songs[nextIndex]);
  }
  function playPreviousSong() {
    if (!songs.length || !activeSong) return;
    if (player.currentTime > 3) {
      player.seekTo(0);
      player.play();
      return;
    }
    const currentIndex = songs.findIndex((song) => song.id === activeSong.id);
    const pastIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    setActiveSong(songs[pastIndex]);
  }
  async function handleSelectSong(song) {
    if (!song?.uri) return;

    try {
      setActiveSong(song);
    } catch (err) {
      console.log("Select song error:", err);
    }
  }
  useEffect(() => {
    if (!activeSong?.uri) return;

    try {
      player.seekTo(0);
      player.play();
    } catch (err) {
      console.log("Play error:", err);
    }
  }, [activeSong]);
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
        <View style={styles.screen}>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity>
              <Feather
                name="settings"
                size={30}
                color="red"
                style={{ paddingRight: 15 }}
              />
            </TouchableOpacity>
          </View>
          <GradientBackground>
            <View style={styles.content}>
              <SongList
                onRequestDelete={handleRequestDelete}
                activeSong={activeSong}
                onSelectSong={handleSelectSong}
                setSongs={setSongs}
              />
            </View>
            <View style={styles.stickyBottom}>
              <MiniPlayer
                song={activeSong}
                player={player}
                onNext={playNextSong}
                onPlay={playSong}
                onPrevious={playPreviousSong}
              />
            </View>
            <ConfirmModal
              visible={openConfirmModal}
              title={`Delete "${pendingDelete?.title}"?`}
              onConfirm={handleConfirmDelete}
              onCancel={() => {
                setOpenConfirmModal(false);
                setPendingDelete(null);
              }}
            />
            <SecondaryNav />
          </GradientBackground>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  stickyBottom: {
    position: "sticky",
    bottom: 15,
  },
  screenBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
  },
  screen: {
    display: "flex",
    backgroundColor: "#121212",
    position: "relative",
    overflow: "hidden",
    flex: 1,
  },
  content: {
    flex: 1,
    zIndex: 1,
    marginTop: 80,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  songContainer: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 15,

    borderRadius: 15,
  },
  songTitle: {
    color: "#fff",
    fontSize: 15,
  },
});
