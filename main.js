let map = L.map('map').setView([34.67962976966384, 135.17822111031782], 16);

L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
}).addTo(map);


/*
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
*/
L.marker([34.65488868603801, 135.22250388148055]).addTo(map)
    .bindPopup('<img src="https://storage.googleapis.com/public-oukoku-files/optimized/1711256804873animal_outside_ottersanctuary_kotumekawauso_1.webp"style="width:100%; max-width:200px; height:auto; margin-top:5px;"><br>'+'<a href = "https://www.instagram.com/kobe_animalkingdom/">神戸どうぶつ王国</a>はポートアイランドにある、花と動物と人とのふれあい共生パーク'+'<br>営業時間:10:00~17:00 '+'<br>料金:大人(中学生以上) 2,400円 シルバー(満65歳以上) 1,900円 小学生 1,200円 幼児(4歳・5歳) 500円')
L.marker([34.8005698797267, 135.24690843428507]).addTo(map)
    .bindPopup('<img src="https://www.feel-kobe.jp/wp-content/uploads/page//arima.jpg"style="width:100%; max-width:200px; height:auto; margin-top:5px;"><br>'+'<a href = "https://www.instagram.com/kobe_animalkingdom/">有馬温泉</a>は、日本三古湯の一つで、金泉・銀泉が楽しめる歴史ある温泉地。')
L.marker([34.682434833379865, 135.1887091698443]).addTo(map)
    .bindPopup('<img src="https://cdn-mapple.net/g/v3/?u=https://www.mapple.net/cms/wp-content/uploads/2018/01/651570-640x426.jpg"style="width:100%; max-width:200px; height:auto; margin-top:5px;"><br>'+'<a href = "https://www.feel-kobe.jp/area-guide/meriken-harbor/">メリケンパーク</a>は神戸港を一望でき、ポートタワーなどが楽しめる人気の観光スポット。'+'<br>営業時間:24時間開放(入園自由) '+'<br>料金:無料')
L.marker([34.67869993148969, 135.18483766799022]).addTo(map)
    .bindPopup('<img src="https://www.kobe-anpanman.jp/assets/images/about/slider_museum_img_04.jpg"style="width:100%; max-width:200px; height:auto; margin-top:5px;"><br>'+'<a href = "https://www.kobe-anpanman.jp/">アンパンマンミュージアム</a>はアンパンマンの世界を楽しめる、子どもに人気の体験型ミュージアム。'+'<br>営業時間:10:00~18:00 '+'<br>料金:ミュージアム　こども(1歳以上) 2,000円～2,500円 おとな(中学生以上) 2,000円～2,500円 '+' ショッピングモール 入場無料')
L.marker([34.68840825460428, 135.18806748148188]).addTo(map)
    .bindPopup('<img src="https://town.mec-h.com/mh-sannomiya/wp-content/uploads/2022/03/311396_nankinmachi.jpg"style="width:100%; max-width:200px; height:auto; margin-top:5px;"><br>'+'<a href = "https://www.nankinmachi.or.jp/access">南京町</a>は神戸を代表する中華街で、中華料理や食べ歩きが楽しめる人気スポット。'+'<br>営業時間:10:00~21:00(店舗によっては早く閉める店もあります) '+'<br>料金:無料')
L.marker([34.69563260209265, 135.19068526924173]).addTo(map)
    .bindPopup('<img src="https://image.co-trip.jp/content/14renewal_images_l/712547/main_image_20251229160814407.jpg"style="width:100%; max-width:200px; height:auto; margin-top:5px;"><br>'+'<a href = "https://ikutajinja.or.jp/">生田神社</a>は縁結びや開運で知られる、神戸を代表する歴史ある神社。'+'<br>アクセス:JR三ノ宮駅：中央口から徒歩約6〜10分'+'<br>料金:入場無料')
L.marker([34.683345686951725, 135.19360866799028]).addTo(map)
    .bindPopup('<img src="https://res.klook.com/image/upload/q_85/c_fill,w_750/v1666325557/blog/yivna4o5wtuamvop2hne.jpg"style="width:100%; max-width:200px; height:auto; margin-top:5px;"><br>'+'<a href = "https://atoa-kobe.jp/">AQUARIUM × ART átoa</a>はアートと水族館が融合した、幻想的な世界を楽しめる人気スポット。'+'<br>営業時間:10:00~17:00 '+'<br>料金:大人(中学生以上) 2,600円 子供(小学生) 1,500円 幼児(3歳以上) 大人1名につき幼児1名無料 追加/1名500円 幼児(3歳未満) 無料')
L.marker([34.68278155528748, 135.1866600238091]).addTo(map)
    .bindPopup('<img src="https://www.smartmagazine.jp/kansai/wp-content/uploads/2016/09/kobeporttower11.jpg"style="width:100%; max-width:200px; height:auto; margin-top:5px;"><br>'+'<a href = "https://www.kobe-port-tower.com/">神戸ポートタワー</a>は神戸のシンボル的な展望塔。神戸港や街並みを一望できる人気スポット。'+'<br>アクセス:JR・阪神元町駅から徒歩約15分')
L.marker([34.68028281919799, 135.1835464833354]).addTo(map)
    .bindPopup('<img src="https://harborland.co.jp/wpapp/wp-content/uploads/2025/03/slider01.jpg"style="width:100%; max-width:200px; height:auto; margin-top:5px;"><br>'+'<a href = "https://harborland.co.jp/">神戸ハーバーランド</a>は神戸港に面した大型商業エリア。ショッピングやグルメ、夜景を楽しめる人気スポット。'+'<br>営業時間:10:00~21:00 '+'<br>料金:入場無料')
L.marker([34.764633150645395, 135.24766849631592]).addTo(map)
    .bindPopup('<img src="https://www.rokkosan.com/gt/wp-content/themes/gt/assets/img/top/section_img06.jpg"style="width:100%; max-width:200px; height:auto; margin-top:5px;"><br>'+'<a href = "https://www.rokkosan.com/gt/">六甲ガーデンテラス</a>は六甲山の山頂近くにある展望スポット。神戸の街並みや夜景を一望できる人気スポット。'+'<br>アクセス：六甲ケーブル・六甲山上バスで約20分')