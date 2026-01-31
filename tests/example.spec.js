// tests/assignment1.spec.js
const { test, expect } = require('@playwright/test');

const TARGET_URL = 'https://www.swifttranslator.com/';

// -----------------------------------------------------------------------
// POSITIVE FUNCTIONAL TESTS
// -----------------------------------------------------------------------

test('Pos_Fun_0001: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('adoo uba kiiyatadha ennee adha?');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('අඩෝ උබ කීයටද එන්නේ අද?')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0002: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Meeting eka postpone karanna puluvan dha?');

  // 2. Output Check: Just look for the text on the page!s
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('Meeting එක postpone කරන්න පුලුවන් ද?')).toBeVisible({ timeout: 10000 });
});



test('Pos_Fun_0003: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Mama email eka check karala reply karannam.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('මම email එක check කරල reply කරන්නම්.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0004: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Mama adha late venna puluvan, traffic eka ban.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('මම අද late වෙන්න පුලුවන්, traffic එක බන්.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0005: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Office eke adha meeting eka hari dhiga unaa, ekanisa  mata focus karanna amaru unaa. Manager kiyapu dheval okkoma note karagaththa, eth brain eka nam full overload.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('Office eke අද meeting එක හරි දිග උනා, එකනිස  මට focus කරන්න අමරු උනා. Manager කියපු දෙවල් ඔක්කොම note කරගත්ත, එත් brain එක නම් full overload.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0006: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('karunakarala me report eka adha submit karanna, delay karanna epaa.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('කරුනකරල මෙ report එක අද submit කරන්න, delay කරන්න එපා.')).toBeVisible({ timeout: 10000 });
});

///////


test('Pos_Fun_0007: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('gaeliiliyoogee kaalayee sita nuuthana vidhYaava piLibaDHA paapthumaagee nosansunthaavaya kramayen adu vii galaa gos aetha. maeetha ithihaasayee ihaLama jala salakuNa vannee 1864 viShaya maalaavayi. navavana piyusgee dhooSha, paapthumaa vathikaanu kavunsilaya dha kaeDHAvuu athara ehidhii paapthumaagee novaradhina bava piLibaDHA muulaDharmaya ohugee bala kiriima matha praThama varata prakaashayata path karana ladhii.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('ගැලීලියෝගේ කාලයේ සිට නූතන විද්‍යාව පිළිබඳ පාප්තුමාගේ නොසන්සුන්තාවය ක්‍රමයෙන් අඩු වී ගලා ගොස් ඇත. මෑත ඉතිහාසයේ ඉහළම ජල සලකුණ වන්නේ 1864 විෂය මාලාවයි. නවවන පියුස්ගේ දෝෂ, පාප්තුමා වතිකානු කවුන්සිලය ද කැඳවූ අතර එහිදී පාප්තුමාගේ නොවරදින බව පිළිබඳ මූලධර්මය ඔහුගේ බල කිරීම මත ප්‍රථම වරට ප්‍රකාශයට පත් කරන ලදී.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0008: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('namuth nisaekavama shudhDha vuu vimarshanaya, palliyee siragevalvala vaDhahinsaa kiriimee upakaraNa pariikShaa kiriima saDHAhaa vaedihiti haa dhurvala gaeliiliyoova yomu kiriima piLiganii pamaNak nova, evaeni arThakaThanayak avashYA karayi. meya hudhek vidhYaathmaka avavaadhayak saha sayamayak novee, vaarShika paraamithiya vaeni balagathu saakShi labaa gatha haeki vana thek aadharshayak maaru kiriimata aethi akamaeththaki. meya saakachChaavata saha vivaadhayata aethi biyayi. vikalpa adhahas vaaraNaya kiriima saha vaDhahinsaa paemiNaviimata tharjanaya kiriima ovungee yoojakayin aarakShaa kara aethi bava penena muulaDharmaya saha palliya kerehima vishvaasayak nomaethikama paavaa dheyi. tharjana saha gaeliiliyoogee nivasa athadanguvata gaeniima avashYA vuuyee aeyi? sathYAyata vaeraedhdha samaGA gaetiimen thamanva aarakShaa kara gatha nohaekidha?');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('නමුත් නිසැකවම ශුද්ධ වූ විමර්ශනය, පල්ලියේ සිරගෙවල්වල වධහින්සා කිරීමේ උපකරණ පරීක්ෂා කිරීම සඳහා වැඩිහිටි හා දුර්වල ගැලීලියෝව යොමු කිරීම පිළිගනී පමණක් නොව, එවැනි අර්ථකථනයක් අවශ්‍ය කරයි. මෙය හුදෙක් විද්‍යාත්මක අවවාදයක් සහ සයමයක් නොවේ, වාර්ෂික පරාමිතිය වැනි බලගතු සාක්ෂි ලබා ගත හැකි වන තෙක් ආදර්ශයක් මාරු කිරීමට ඇති අකමැත්තකි. මෙය සාකච්ඡාවට සහ විවාදයට ඇති බියයි. විකල්ප අදහස් වාරණය කිරීම සහ වධහින්සා පැමිණවීමට තර්ජනය කිරීම ඔවුන්ගේ යෝජකයින් ආරක්ෂා කර ඇති බව පෙනෙන මූලධර්මය සහ පල්ලිය කෙරෙහිම විශ්වාසයක් නොමැතිකම පාවා දෙයි. තර්ජන සහ ගැලීලියෝගේ නිවස අතඩන්ගුවට ගැනීම අවශ්‍ය වූයේ ඇයි? සත්‍යයට වැරැද්ද සමඟ ගැටීමෙන් තමන්ව ආරක්ෂා කර ගත නොහැකිද?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0009: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('eheth moorungee biya 2001 gimhaanayeedhii kotharam nirdhaya lesa paethira giyeedha yath, eya ketharam sampuurNa Bhiithiyakin yukthadha yath, saepthaembar 11 vana dhina looka veLaDHA maDhYAsThaanayee saha pentaganayee thrasthavaadhii prahaara ella vana thek eya nihaDA vuuyee naetha. edhina 3,000 kata aasanna pirisak miya giyaha - dhahasayavana siyavasee agaBhaagayeedhii paLamu vaarthaa thabaa gath dhaa sita moorungee prahaaravalin miya giya sQQKYaavata vadaa 2,500 k pamaNa vaediya.ebaevin ehi adupaadu thibiyadhiith, saamaanYA dhee anuva sithiima ehi vaasi aetha.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('එහෙත් මෝරුන්ගේ බිය 2001 ගිම්හානයේදී කොතරම් නිර්දය ලෙස පැතිර ගියේද යත්, එය කෙතරම් සම්පූර්ණ භීතියකින් යුක්තද යත්, සැප්තැම්බර් 11 වන දින ලෝක වෙළඳ මධ්‍යස්ථානයේ සහ පෙන්ටගනයේ ත්‍රස්තවාදී ප්‍රහාර ella වන තෙක් එය නිහඬ වූයේ නැත. එදින 3,000 කට ආසන්න පිරිසක් මිය ගියහ - දහසයවන සියවසේ අගභාගයේදී පළමු වාර්තා තබා ගත් දා සිට මෝරුන්ගේ ප්‍රහාරවලින් මිය ගිය සංඛ්‍යාවට වඩා 2,500 ක් පමණ වැඩිය.එබැවින් එහි අඩුපාඩු තිබියදීත්, සාමාන්‍ය දේ අනුව සිතීම එහි වාසි ඇත.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0010: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('karUNaakaralaa eeka dhenna.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('කරුණාකරලා ඒක දෙන්න.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0011: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mata eeka epaa.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('මට ඒක එපා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0012: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('aayuboovan! karuNaakaralaa mata podi udhavvak karanna puLuvandha ?');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('ආයුබෝවන්! කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද ?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0013: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('ela machan, dhaen ithin monavadha karanne kiyalaa hithaganna baee.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('එල මචන්, දැන් ඉතින් මොනවද කරන්නේ කියලා හිතගන්න බෑ.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0014: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mata adha thaaththata ru 20000 k dhenna thiyanava, ekanisaa poddak bAEnkuvata yanna venava. ekanisaa mama poddak parakku vevi hodhe');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('මට අද තාත්තට රු 20000 ක් දෙන්න තියනව, එකනිසා පොඩ්ඩක් බැන්කුවට යන්න වෙනව. එකනිසා මම පොඩ්ඩක් පරක්කු වෙවි හොදෙ')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0015: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mama dhAEnuvath vidhiyata eyala trip eka enne naha vagee. un hAEmadhAma ookane ban kAle. enava enava kiyala anthimata enne nAEhAE.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('මම දැනුවත් විදියට එයල trip එක එන්නෙ naha වගේ. උන් හැමදම ඕකනෙ බන් කලෙ. එනව එනව කියල අන්තිමට එන්නෙ නැහැ.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0016: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('posh kiyala hithan inna kello vAEdi hariyak hadhdha pitisara gam valin AEvilla adi 6 k udin yanne. ganan ganna epaa ban oova.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('posh කියල හිතන් ඉන්න කෙල්ලො වැඩි හරියක් හද්ද පිටිසර ගම් වලින් ඇවිල්ල අඩි 6 ක් උඩින් යන්නෙ. ගනන් ගන්න එපා බන් ඕව.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0017: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('aayuboovan mahathmayaa, api amathanne SLT mobitel eken. mahathmayage pasugiya masa bilpatha geva nomAEthi nisa sambandhathaava visandhi viimata hAEkiyaava thiyanava.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('ආයුබෝවන් මහත්මයා, අපි අමතන්නෙ SLT මොබිටෙල් එකෙන්. මහත්මයගෙ පසුගිය මස බිල්පත ගෙව නොමැති නිස සම්බන්දතාව විසන්දි වීමට හැකියාව තියනව. ')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0018: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('chandhrayaa saha aGAharu athara pramaaNayen maDhYAma pramaaNayee lookayak aetha, ehi ihaLa vaathaya vidhuliyen raeLi gaesemin pavathii - yaabadhava aethi muulaakRUthi vaLalu sahitha grahalookayen galaa eyi, sadhaakaalika dhuBuru valaakuLu sahitha aLu paehaethi thaeBAili paehaeyakin vaesii aethi athara, jiivayee dheeval ahasin pahaLa nodhannaa mathupitata vaetee. eya kotharam dhurindha yath, aalookaya suuryAyaagee sita ehi yaamata paeyakata vadaa gatha vee. aBhYAvakaasha yaanayata vasara gaNanaavak gatha vee. ee gaena bohoo dhee thavamath aBhirahasak - eya mahaa saagara raDHAvaa thabaa ganneedha yanna aethuLuva. kesee vethath, pRUThiviyee yuga gaNanaavakata pera jiivayee aaramBhayata heethu vuu aethaem kriyaavaliin adha kriyaathmaka vuu sThaanayak LaGAaa viya haeki bava haDHAunaa gaeniimata api pramaaNavath tharam dhanimu.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('චන්ද්‍රයා සහ අඟහරු අතර ප්‍රමාණයෙන් මධ්‍යම ප්‍රමාණයේ ලෝකයක් ඇත, එහි ඉහළ වාතය විදුලියෙන් රැළි ගැසෙමින් පවතී - යාබදව ඇති මූලාකෘති වළලු සහිත ග්‍රහලෝකයෙන් ගලා එයි, සදාකාලික දුඹුරු වලාකුළු සහිත අළු පැහැති තැඹෛලි පැහැයකින් වැසී ඇති අතර, ජීවයේ දේවල් අහසින් පහළ නොදන්නා මතුපිටට වැටේ. එය කොතරම් දුරින්ද යත්, ආලෝකය සූර්යයාගේ සිට එහි යාමට පැයකට වඩා ගත වේ. අභ්‍යවකාශ යානයට වසර ගණනාවක් ගත වේ. ඒ ගැන බොහෝ දේ තවමත් අභිරහසක් - එය මහා සාගර රඳවා තබා ගන්නේද යන්න ඇතුළුව. කෙසේ වෙතත්, පෘථිවියේ යුග ගණනාවකට පෙර ජීවයේ ආරම්භයට හේතු වූ ඇතැම් ක්‍රියාවලීන් අද ක්‍රියාත්මක වූ ස්ථානයක් ළඟාඅ විය හැකි බව හඳෞනා ගැනීමට අපි ප්‍රමාණවත් තරම් දනිමු.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0019: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('adha bAEri vevi. api heta balamudha?');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('අද බැරි වෙවි. අපි හෙට බලමුද?')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0020: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('ehema vena ekanam loku dheyak hAEbAEyi. eeth iridhaa vuna eka thamaa ekama prashne.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('එහෙම වෙන එකනම් ලොකු දෙයක් හැබැයි. ඒත් ඉරිදා වුන එක තමා එකම ප්‍රශ්නෙ.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0021: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('maeethakadhii, gimhaanaya avasaanayee piLigaeniimee sisil dhinayaka, laShiinaa nam visi nava haeviridhi kaanthaavak chikaagoo hi dhakuNu paeththee nivaasa vYaapRUthiyak vana diyarboon hooms idhiripita SUV raThayaka hud eka matha vaadi vuuvaaya. aegee aesvala thibuNee kalakiruNu penumak, namuth esee nomaethi nam tharuNa bavak penennata thibuNi, aegee lassana muhuNa keLin kaLa hisakes valin raamu kara aetha.aeya kudaa kala sitama aeDHA siti kaLu saha rathu paehaethi baeeg traeksuut ekakin saerasii sitiyaaya. aegee dhemavpiyanta aluth AEdhum saDHAhaa mudhal thibuNee kalaathurakini, ebaevin aeya aegee GHAaathi sahoodhara sahoodhariyangee AEdhum labaa gaeniimata purudhuva sitiyaaya.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('මෑතකදී, ගිම්හානය අවසානයේ පිළිගැනීමේ සිසිල් දිනයක, ලෂීනා නම් විසි නව හැවිරිදි කාන්තාවක් චිකාගෝ හි දකුණු පැත්තේ නිවාස ව්‍යාපෘතියක් වන ඩියර්බෝන් හෝම්ස් ඉදිරිපිට SUV රථයක හුඩ් එක මත වාඩි වූවාය. ඇගේ ඇස්වල තිබුණේ කලකිරුණු පෙනුමක්, නමුත් එසේ නොමැති නම් තරුණ බවක් පෙනෙන්නට තිබුණි, ඇගේ ලස්සන මුහුණ කෙළින් කළ හිසකෙස් වලින් රාමු කර ඇත.ඇය කුඩා කල සිටම ඇඳ සිටි කළු සහ රතු පැහැති බෑග් ට්‍රැක්සූට් එකකින් සැරසී සිටියාය. ඇගේ දෙමව්පියන්ට අලුත් ඇදුම් සඳහා මුදල් තිබුණේ කලාතුරකිනි, එබැවින් ඇය ඇගේ ඥාඅති සහෝදර සහෝදරියන්ගේ ඇදුම් ලබා ගැනීමට පුරුදුව සිටියාය.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0022: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('eya esee sidhu viima pudhumayata karunak nove.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('එය එසේ සිදු වීම පුදුමයට කරුනක් නොවෙ.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0023: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('meeting eka adha rAE 9 PM dha ban thiyenne?.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('meeting එක අද රැ 9 PM ද බන් තියෙන්නෙ?')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0024: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('iiye oyaa campus giyadha ?');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('ඊයෙ ඔයා campus ගියද ?')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0025: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('bAEhAE, ekanam kohomatavath karanna bAE.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('බැහැ, එකනම් කොහොමටවත් කරන්න බැ.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0026: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('hari hari baya venna epaa, api mokak hari karamu.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('හරි හරි බය වෙන්න එපා, අපි මොකක් හරි කරමු.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_0027: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('oyaa gedhara giyaama SMS ekak dhaanavadha ehenam.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('ඔයා ගෙදර ගියාම SMS එකක් දානවද එහෙනම්.')).toBeVisible({ timeout: 10000 });
});



test('Pos_Fun_0028: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('heta campus aavama assignment eka karanna mathak karanna mata.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('හෙට campus ආවම assignment එක කරන්න මතක් කරන්න මට.')).toBeVisible({ timeout: 10000 });
});



test('Pos_Fun_0029: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('ee Sonaal ge birthday eka December 25 thiyenne hodhe, ee kiyanne iilaga maase.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('ඒ සොනාල් ගෙ birthday එක December 25 තියෙන්නෙ හොදෙ, ඒ කියන්නෙ ඊලග මාසෙ.')).toBeVisible({ timeout: 10000 });
});



test('Pos_Fun_0030: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mama dhanna vidhiyata eeka 10 Kg vath bara nAEhAE.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('මම දන්න විදියට ඒක 10 Kg වත් බර නැහැ.')).toBeVisible({ timeout: 10000 });
});




// -----------------------------------------------------------------------
// NEGATIVE / ROBUSTNESS TESTS
// -----------------------------------------------------------------------






test('Neg_Fun_0001: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('existing workflow eka optimise karanna nam recommendations tika submit karanna ona.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('existing workflow එක optimize කරන්න නම් recommendations ටික submit කරන්න ඔන.')).toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_0002: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('it is what it is ban. Uba oova ganan ganna epaa.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('it is what it is බන්. උබ ඕව ගනන් ගන්න එපා.')).toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_0003: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('uba laga giya avurudhdhe maths notes thiynavadha?');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('උබ ලග ගිය අවුරුද්දෙ maths notes තිය්නවද?')).toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_0004: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('university vAEda vala mama igena ganna dhevala samahara velavata poth poth valin vitarak therum ganna amaaruyi. ehema velaavaka mama aluth sahaayakayin bhavithaa karanavaa. ChatGPT vagee tool ekak igena ganna ekata loku sahayogayak venavaa, eeth eyaa dhenna uththara hari dha kiyalaa thama api hithala balanna oonee. ehema karoth igena ganna vAEda pahasu saha prayojanavath venavaa kiyalaa mama hithanne.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.university
  await expect(page.getByText('university වැඩ වල මම ඉගෙන ගන්න දෙවල සමහර වෙලවට පොත් පොත් වලින් විටරක් තෙරුම් ගන්න අමාරුයි. එහෙම වෙලාවක මම අලුත් සහායකයින් බ්හවිතා කරනවා. chatGPT වගේ tool එකක් ඉගෙන ගන්න එකට ලොකු සහයොගයක් වෙනවා, ඒත් එයා දෙන්න උත්තර හරි ද කියලා තම අපි හිතල බලන්න ඕනේ. එහෙම කරොත් ඉගෙන ගන්න වැඩ පහසු සහ ප්‍රයොජනවත් වෙනවා කියලා මම හිතන්නෙ.')).toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_0005: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('adha mama JavaScript igena gaththaa, namuth syntax tika poddak amaaruyi kiyalaa hithenavaa.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('අද මම JavaScript ඉගෙන ගත්තා, නමුත් syntax ටික පොඩ්ඩක් අමාරුයි කියලා හිතෙනවා.')).toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_0006: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('giya semester ekee ugannapu CN module ekE ethernet gAEna kotasa oyaata puluvandha? mata eeka therune nAEhA neh. oyaata puluvandha mata eeka kiyala dhenna?');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('ගිය semester එකේ උගන්නපු CN module එකෙ ethernet ගැන කොටස ඔයාට පුලුවන්ද? මට ඒක තෙරුනෙ නැහ නෙහ්. ඔයාට පුලුවන්ද මට ඒක කියල දෙන්න?')).toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_0007: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mee oyaa ara kellage instagram account eka dhAEkkadha? maru ne');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('මේ ඔයා අර කෙල්ලගෙ instagram account එක දැක්කද? මරු නේ')).toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_0008: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill(' me project eka sambandhayen podi issue ekak thiyenava. Mama kalin plan kala vidhihata tasks complete kala namuth API integration eka expected vidihata work venne nAE. E nisa mama technical team ekata mail ekak yavala thiyenava clarification ekak ganna. Please meka review karala next steps monavadha kiyala advice karanna.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText(' මෙ project එක සම්බන්දයෙන් පොඩි issue එකක් තියෙනව. මම කලින් plan කල විදිහට tasks complete කල නමුත් API integration එක expected විඩිහට work වෙන්නෙ නැ. එ නිස මම technical team එකට mail එකක් යවල තියෙනව clarification එකක් ගන්න. Please මෙක review කරල next steps මොනවද කියල advice කරන්න.'
)).toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_0009: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mata SysOps paththen job ekak oona, monava hari aaranchiyak aavoth kiyanna mata.');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('මට SysOps පත්තෙන් job එකක් ඕන, මොනව හරි ආරන්චියක් ආවොත් කියන්න මට.')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0010: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('uu ekapaaratama magen ahuva " what kind of man are you" kiyala. ');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('ඌ එකපාරටම මගෙන් අහුව " what kind of man are you" කියල. ')).toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_0011: Daily Greeting (Simple Sentence)', async ({ page }) => {
  await page.goto(TARGET_URL);

  // 1. Input: Use the placeholder we know works
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('o y a t a h o d a t a m a s u r e d h a');

  // 2. Output Check: Just look for the text on the page!
  // This waits automatically until "ඔයාට කොහොමද?" appears anywhere.
  await expect(page.getByText('ඔ යා ට හො ද ට ම සු ව ර් ද')).toBeVisible({ timeout: 10000 });
});





// -----------------------------------------------------------------------
// UI TEST SCENARIO
// -----------------------------------------------------------------------

test('Pos_UI_0001: Real-time Update Check', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');

  // Type slowly
  await inputBox.pressSequentially('mama', { delay: 200 }); 

  // Wait for the Sinhala translation "මම" to appear
  await expect(page.getByText('මම').first()).toBeVisible({ timeout: 10000 });
});