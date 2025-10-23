import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { listExpenses, listCategories, addExpense } from "../db/queries";
export default function Home() {
  const [exps, setExps] = useState<any[]>([]);
  const [cats, setCats] = useState<any[]>([]);
  async function refresh() {
    setExps(await listExpenses());
    setCats(await listCategories());
  }
  useEffect(() => {
    refresh();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 16 }}>
        <Pressable
          onPress={async () => {
            const catsNow = await listCategories();

            if (!catsNow.length) return;
            
            await addExpense(9.99, catsNow[0].id, "Sample", Date.now());
            refresh();
          }}
          style={{
            backgroundColor: "#111827",
            padding: 14,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>Add Sample Expense</Text>
        </Pressable>
      </View>

      <FlatList
        data={exps}
        keyExtractor={(e) => String(e.id)}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              borderBottomWidth: 1,
              borderColor: "#eee",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{new Date(item.created_at).toLocaleDateString()}</Text>
            <Text>
                ${item.amount.toFixed(2)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
