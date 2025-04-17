import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchAllPlaces, postRequest } from "@/services/place-service";
import { useContextHooks } from "@/contextProvider";

type post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};



export default function Index() {
  const [isPost, SetIsPost] = useState([]);
  const [isTitle, setIsTitle] = useState("");
  const [isBody, setIsBody] = useState("");
  const [isNewPost, setIsNewPost] = useState({});
    const { user, setUser} = useContextHooks()
  
console.log(user, "This is initia user")
  // Mutation
//   const {
//     mutateAsync: postRequestData,
//     isSuccess
//   } = useMutation({ mutationFn: postRequest });

//   if(!isSuccess){
//     return "Something went wrong"
//   }

// console.log(postRequestData)

    // Queries
    const {
        data: fetchAllPlaceData,
        isError,
        isLoading,
        isFetching,
      } = useQuery({ queryKey: ["fetchAllPlaces"], queryFn: fetchAllPlaces });
  
setUser(fetchAllPlaceData)
console.log(user, "This is user")
  if (isLoading) {
    return (
      <ActivityIndicator
        size={64}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subCotainer}>
        <StatusBar backgroundColor={"#000"} />
                {/* <View style={styles.postBox}>
                  <TextInput
                    placeholder="title"
                    value={isTitle}
                    onChangeText={setIsTitle}
                    style={styles.textInputBox}
                  />
                  <TextInput
                    placeholder="body"
                    value={isBody}
                    onChangeText={setIsBody}
                    style={styles.textInputBox}
                  />
                  <TouchableOpacity style={styles.submitB} onPress={() => Alert.alert(`The title is ${isTitle} and the Body of the content is ${isBody}`)}>
                    <Text style={{ fontSize: 16, textAlign: "center", fontWeight: 700}}>Submit</Text>
                  </TouchableOpacity>
                </View> */}
        <FlatList
          ListHeaderComponent={
            <Text
              style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}
            >
              Post
            </Text>
          }
          ListFooterComponent={
            <Text
              style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}
            >
              End
            </Text>
          }
          showsVerticalScrollIndicator={false}
          data={fetchAllPlaceData}
          renderItem={({ item }: { item: post }) => (
            <View style={styles.boxList}>
              <Text>{item.userId}</Text>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "navy",
  },
  subCotainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  boxList: {
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "dotted",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    gap: 5,
  },
  postBox: {
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,
    padding: 20,
    gap: 10,
    borderRadius: 8,
  },
  textInputBox: {
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  submitB: {
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
  },
  nextPage: {
    borderWidth: 2,
    height: 48,
    width: "100%",
    backgroundColor: "gray",
    color: "#fff",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
