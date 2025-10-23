import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { listExpenses, listCategories } from "../db/queries";
import { exportCSV } from "../utils/csv";
export default function Reports() {
  const [rows, setRows] = useState<any[]>([]);
  const [cats, setCats] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      setRows(await listExpenses(1000, 0));
      setCats(await listCategories());
    })();
  }, []);
  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontWeight: "700" }}>Reports</Text>
      <Pressable
        onPress={() => exportCSV(rows, cats)}
        style={{
          backgroundColor: "#111827",
          padding: 14,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>Export CSV</Text>
      </Pressable>
    </View>
  );
}
