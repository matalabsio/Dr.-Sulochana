#!/usr/bin/env bash
# Sync official illustrations from design folder → public/illustrations/
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/Dr Sulochana website Illustrations"
DEST="$ROOT/public/illustrations"

declare -A MAP=(
  ["Pregnant_Couple_young_Indian_couple_woman_7_months_pregnant_w_ae652074-5fb8-4835-825c-b109bd87e7f4_1.png"]="pregnant-couple.png"
  ["Meditating_Woman_Illustration_flat_vector_illustration_young__e0b66554-56e4-4d68-9d8b-ba4a0a5e42e5_1.png"]="meditating-woman.png"
  ["Couple_with_Newborn_flat_vector_illustration_Indian_man_cradl_1c4ea332-a465-486e-89cc-11bf6c11396b_1.png"]="couple-newborn.png"
  ["Pregnant_Woman_Illustration_orange_outfit_flat_vector_illustr_d7426621-6966-41f8-8aef-f2bef89dbd76_2.png"]="pregnant-woman-orange.png"
  ["Couple_on_Floor_flat_vector_illustration_Indian_couple_sittin_259a3823-f7e4-444a-ab74-9afe4e5ecf11_1.png"]="couple-floor.png"
  ["Pregnant_Woman_top_right_flat_vector_illustration_pregnant_In_6adbfc06-0b51-4a3b-ae71-8333856bd947_0.png"]="pregnant-woman-teal.png"
)

mkdir -p "$DEST"

for src_name in "${!MAP[@]}"; do
  dest_name="${MAP[$src_name]}"
  cp "$SRC/$src_name" "$DEST/$dest_name"
  echo "→ $dest_name"
done

echo "Done. Assets synced to public/illustrations/"
