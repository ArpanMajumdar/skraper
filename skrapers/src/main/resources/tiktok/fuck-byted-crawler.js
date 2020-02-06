const {JSDOM} = require("jsdom");
const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const {window} = jsdom;

window.HTMLCanvasElement.prototype.getContext = () => {};

function generateSignature(url, userAgent) {
    this.navigator = {userAgent: userAgent};

    var e = {};

    var r = function () {


        function fn(key, value, deps) {
            return (cacheCallback[key] || (cacheCallback[key] = setTimeout("x,y", "return x " + key + " y")))(deps, value);
        }


        function logger(file, callback, name) {
            return (HANDLERS[name] || (HANDLERS[name] = setTimeout("x,y", "return new x[y](" + Array(name + 1).join(",x[++y]").substr(1) + ")")))(file, callback);
        }

        /**
         * @param {string} table
         * @param {!Array} array
         * @param {?} config
         * @return {?}
         */
        function get(table, array, config) {
            var name;
            var i;
            var data = {};
            var k = data.d = config ? config.d + 1 : 0;
            data["$" + k] = data;
            /** @type {number} */
            i = 0;
            for (; i < k; i++) {
                data[name = "$" + i] = config[name];
            }
            /** @type {number} */
            i = 0;
            k = data.length = array.length;
            for (; i < k; i++) {
                data[i] = array[i];
            }
            return init(table, 0, data);
        }

        /**
         * @param {string} data
         * @param {number} i
         * @param {number} b
         * @return {?}
         */
        function init(data, i, b) {
            /**
             * @param {?} init
             * @return {undefined}
             */
            function callback(init) {
                a[j++] = init;
            }

            /**
             * @return {?}
             */
            function $() {
                return p = data.charCodeAt(i++) - 32, data.substring(i, i = i + p);
            }

            /**
             * @return {undefined}
             */
            function start() {
                try {
                    v = init(data, i, b);
                } catch (callHeight) {
                    h = callHeight;
                    /** @type {function(): undefined} */
                    v = start;
                }
            }

            var h;
            var v;
            var e;
            var p;
            /** @type {!Array} */
            var a = [];
            /** @type {number} */
            var j = 0;
            for (; ;) {
                switch (p = data.charCodeAt(i++) - 32) {
                    case 1:
                        callback(!a[--j]);
                        break;
                    case 4:
                        a[j++] = $();
                        break;
                    case 5:
                        callback(function (inputs) {
                            /** @type {number} */
                            var index = 0;
                            var n = inputs.length;
                            return function () {
                                /** @type {boolean} */
                                var skipProcess = index < n;
                                return skipProcess && callback(inputs[index++]), skipProcess;
                            };
                        }(a[--j]));
                        break;
                    case 6:
                        v = a[--j];
                        callback(a[--j](v));
                        break;
                    case 8:
                        if (p = data.charCodeAt(i++) - 32, start(), i = i + p, p = data.charCodeAt(i++) - 32, v === init) {
                            i = i + p;
                        } else {
                            if (v !== start) {
                                return v;
                            }
                        }
                        break;
                    case 9:
                        /** @type {function(string, number, number): ?} */
                        a[j++] = init;
                        break;
                    case 10:
                        callback(s(a[--j]));
                        break;
                    case 11:
                        v = a[--j];
                        callback(a[--j] + v);
                        break;
                    case 12:
                        v = $();
                        /** @type {!Array} */
                        e = [];
                        /** @type {number} */
                        p = 0;
                        for (; p < v.length; p++) {
                            /** @type {number} */
                            e[p] = v.charCodeAt(p) ^ p + v.length;
                        }
                        callback(String.fromCharCode.apply(null, e));
                        break;
                    case 13:
                        v = a[--j];
                        /** @type {boolean} */
                        h = delete a[--j][v];
                        break;
                    case 14:
                        /** @type {number} */
                        a[j++] = data.charCodeAt(i++) - 32;
                        break;
                    case 59:
                        callback((p = data.charCodeAt(i++) - 32) ? (v = j, a.slice(j = j - p, v)) : []);
                        break;
                    case 61:
                        callback(a[--j][data.charCodeAt(i++) - 32]);
                        break;
                    case 62:
                        p = a[--j];
                        /** @type {number} */
                        b[0] = 65599 * b[0] + b[1].charCodeAt(p) >>> 0;
                        break;
                    case 65:
                        h = a[--j];
                        v = a[--j];
                        a[--j][v] = h;
                        break;
                    case 66:
                        callback(fn(data[i++], a[--j], a[--j]));
                        break;
                    case 67:
                        v = a[--j];
                        e = a[--j];
                        callback((p = a[--j]).x === init ? get(p.y, v, p.z) : p.apply(e, v));
                        break;
                    case 68:
                        callback(fn((p = data[i++]) < "<" ? (i--, $()) : p + p, a[--j], a[--j]));
                        break;
                    case 70:
                        callback(false);
                        break;
                    case 71:
                        a[j++] = global;
                        break;
                    case 72:
                        /** @type {number} */
                        a[j++] = +$();
                        break;
                    case 73:
                        callback(parseInt($(), 36));
                        break;
                    case 75:
                        if (a[--j]) {
                            i++;
                            break;
                        }
                    case 74:
                        /** @type {number} */
                        p = data.charCodeAt(i++) - 32 << 16 >> 16;
                        i = i + p;
                        break;
                    case 76:
                        callback(b[data.charCodeAt(i++) - 32]);
                        break;
                    case 77:
                        v = a[--j];
                        callback(a[--j][v]);
                        break;
                    case 78:
                        /** @type {number} */
                        p = data.charCodeAt(i++) - 32;
                        callback(logger(a, j = j - (p + 1), p));
                        break;
                    case 79:
                        /** @type {number} */
                        p = data.charCodeAt(i++) - 32;
                        callback(b["$" + p]);
                        break;
                    case 81:
                        h = a[--j];
                        a[--j][$()] = h;
                        break;
                    case 82:
                        callback(a[--j][$()]);
                        break;
                    case 83:
                        h = a[--j];
                        b[data.charCodeAt(i++) - 32] = h;
                        break;
                    case 84:
                        /** @type {boolean} */
                        a[j++] = true;
                        break;
                    case 85:
                        a[j++] = void 0;
                        break;
                    case 86:
                        callback(a[j - 1]);
                        break;
                    case 88:
                        h = a[--j];
                        v = a[--j];
                        a[j++] = h;
                        a[j++] = v;
                        break;
                    case 89:
                        callback(function () {
                            function context() {
                                return get(context.y, arguments, b);
                            }

                            return context.y = $(), context.x = init, context.z = b, context;
                        }());
                        break;
                    case 90:
                        a[j++] = null;
                        break;
                    case 91:
                        a[j++] = h;
                        break;
                    case 93:
                        h = a[--j];
                        break;
                    case 0:
                        return a[--j];
                    default:
                        callback((p << 16 >> 16) - 16);
                }
            }
        }

        var global = this;
        var setTimeout = global.Function;

        var s = Object.keys || function (stoichiometries) {
            var object = {};
            /** @type {number} */
            var nil = 0;
            var the_metabolite;
            for (the_metabolite in stoichiometries) {
                /** @type {string} */
                object[nil++] = the_metabolite;
            }
            return object.length = nil, object;
        };
        var cacheCallback = {};
        var HANDLERS = {};

        return get;
    }()('g,$@drbms!l!n \u0418b/s"g,&Usz`dlms#g,.}jcb{|zFbxjx}~ms$g,(lfi~ah`{ms%g,)gk}ejo{\u007fcms&g,&qnfme|ms\',!^s(,)|doikgauus),,j\u007fabSysaWzrrs*,(|fY\u007f~d`hs+,&jbfn~cs,,\'nfmosCks-,*icm\u007fM`ttSgs.,&eoi{K\u007fs/,)z\u007fi\u007fy|f~vs0l#l*ms10s2yWl ._b&s o ]1l l Jb<k$.aj;l .Tb<k$.gj/l .^b<k&i"-4j!\u001f+& s3yPo ]3s!l!l Hd>&l!l Bd>&+l!l <d>&+l!l 6d>&+l!l &+ s4y=o o ]7q"21o l q"18o ]4l 2d>& s6{s5yMo o ]8q"21o ]2Ld<l 4d#>>>b|s!o l q"18o ]4l!& s7yIo o ]6q"21o ]4o ]2Jd<l 6d#>>>b|&o ]3l &+ s8y\u01fd,`\u0004*&3#-r\u001d\u0003:\u001b\tt}a\u00026\'%`b\r\u001ff\nkop\v\b\u001f3%\bU-(\u0007\t\u00161=%;\u0019\u0017\u0003)\u001a;\u001c\u0001\r\rO?.>\u0019\u001a/\t=\u001as!$ s"0s$l o ],ml$3+d">=k\u00ddl vo ].mxl$v1+s$[!c\u012fb&@d<l vo ].mxl$v1+s$[!c\u012fb&8d<b|l vo ].mxl$v1+s$[!c\u012fb&b|s#l"l!vo ]/mxl#i%9tz40b&Bd>[!c+s"l"l!vo ]/mxl#i$5j40b&<d>[!c+s"l"l!vo ]/mxl#\u0ff0b&6d>[!c+s"l"l!vo ]/mxl#._b&[!c+s"j\uff52l o ],ml$b-0b>k\u00d1l vo ].mxl$v1+s$[!c\u012fb&@d<l o ],ml$b>k6l vo ].mxl$[!c\u012fb&8d<j!0b|s#l"l!vo ]/mxl#i%9tz40b&Bd>[!c+s"l"l!vo ]/mxl#i$5j40b&<d>[!c+s"l"l o ],ml$b>k6l!vo ]/mxl#\u0ff0b&6d>[!cj#$!=+s"l"$!=+s"l" s9y\u0136o ]%v,-n|jqewVxp{rvmmx,&eff\u007fkx[!cs"l",%roc|a.Pal",&nbanb\u007f@al"v,*mnxNaadtjg[!mx$"2d[!cs#l#,$bjhs,*;?|u.|uc{ual#v,(n`fgXhv{mx$$\u9f98\u0e11\u0e20\uacbd2<[#c}l#,*ycmiaxR}ga2al#,+xdby@vwav`M1al#,)zbd{Nac\u007fc,$hlkbal#v,#bvfmx88802[%c}l#v,&uszfanmx[ c}l"v,)}eOmyoZB]mx[ cs!0s$l$Pb<k4l l!o ],mb%^l$1+s$j\u0005l  s:y:(1o ]:i\'1ps9wxb& ) %{s /  s;y>0s"l"l!o ],mb<k+l"^l"1+s"j\bl  s<y\u00b6o ]!n s l vr\'setDatex1[!c}l vr(setMonthx5[!c}0l v,1vwg@|{rbvt~S{xlEUmx[ cb-s!l vr(setMonthx;[!c}0l v,1vwg@|{rbvt~S{xlEUmx[ cb-s"gr$Mathvr#minxl!l"["c s=y\u010f(\u0105o ]%v,-n|jqewVxp{rvmmx,&eff\u007fkx[!cs l v,*mnxNaadtjgmx,%rceoe[!cs!l!v,,khzJhew}g|yymx,9N_Y[QA{ECWD{WCILLXN^rGAV^[!cs"l!v,,khz_qcs~qasemxl",5@XZYJQ^XBHZnemq{rceoem[!cs#l!v,,khz_qcs~qasemxl",7BVT[HWXZ@rdlgawcuw~oikam[!cs$l#$!/+l$+ ) &{s $   s>y\u0129[ s o ]&,\'wd|mbb~ms!l!v!k#}[ s"0s#l#l"o ],mb<k\u00e9(\u00del"l#ms$[ s%0s&l&l$o ],mb<k\\l$vr$itemxl&[!ckCl%vr$pushxl$vr$itemxl&[!cr$type[!c}l&1+s&j\uffd7l$r$name$ +s&l$r\'versionk3l&l$r\'version$ ++s&l&l$r(filename$ ++s&l&l%vr$joinx$ [!c+s&l vr$pushxl&[!c})  l#1+s#j\uff4al vr$joinx$!_[!c s?y\u1c6b,)deec~~nst,*yjb~#|uc{u,%vcuao[#s gr&Objectn s!gr&Objectn s"l %s#l#u&k\u0101s$o ]%v,-n|jqewVxp{rvmmx,$wugi[!cs%l%,)`dei\u007fF[]],-`cb}|\u007f~yx{{tpal%,%vr~dlm,(nfd\u007f_dtj,$37v\u007fal%,%vr~dlm,*ldbyHn}x~jl$ao ]%,$fjb~mv,+j|}katRzzxqmxl%[!c}l!l$l%r+offsetWidthal"l$l%r,offsetHeightao ]%,$fjb~mv,+yi`ayuRzzxqmxl%[!c}j\uff39,+Jbiocu1_|zz,%Dtnie,+J~doc0S~rw~,,M\u007fgn|1Zvvgs`,(I{cj`-C[,,M\u007fgn|1\\rfgy`,5Td~yu:Ishp{EE\u0002np\u0005dHDM,0Qc{rx5Cyqzu\u007fy=SL,8Zpnhho{~M\u0001tFVD\u0006tIGY\vaB@@,,Nbad0P|g}dcv,1S}|\u007fxwy8Vv\u007f<NjfLD,\'Dieci~d,\'Didhyel,,Olcmbxs3Ytb\u007f,\'Dmg~~~t,.Mj~egam5Qxlqsx,2Qvzacea9IxtrqsBNMH,*Idadm/Cp|`,-Nabyr2@u{e7UJ,(Kfdxcao|,\'Dg|xbi\u007f,+Hcx|fuc2]qb,(Ohxjab`k,&Abfl|j,\'@mfxlel,)Aogzhzfsp,.Fj|gwg}vw7V|o~,&Ojxhi\u007f,-A{lyus3Vg\u007fppm,2^fw|rv8Z{wptymAQJZ,.Bzsxvr4Vyykvv~,*F~odjn0Wsk,-A[LYUS3SGWY\\\\,2^fw|rv8Q{uxjlvTHLD,+Gyngkq1Arzf,6Zb{p~z<N\u007fqS\u0001vZT@QUA]OY,3_av\u007fsy9Izrn>JNHAL@@,4Y|uewju}h=M~NR\u0002pAWOA,&Khfhid,0]~||`lfr8Zuioth~,)DY+Kbzgyr,*GX,B{{|~}x,*GX,]I`dy{p,7ZK9H~zxlzNBG\u0003wDHT\bzOYEK,-@]/Cp|`4Fseq\u007f,(EZ*Xi\u007fgi,&K^Z@KO,*GR^DOK0A@\\,(Xhfjxd``,1As\u007fua\u007fyw9VrrrjfPD,+Xijaj0A`zza,,_hi`u1Apf|fc,([lmdi-[F,.]jw~w3A\\6[q~ro,1Bwt{p6BQ9I~qt|pLE,/\\uv}v4@_7K`wysq,&Rf`fgj,%Qojmz,/[y|w`4[s`8Kuv}s,2Fzype7V|m;Nrs~N\u0001rp,,X\u007fkmerzv`5[D,\'Qm{njbl,)^cekigawb,+\\eciky\u007fu`4\',+\\eciky\u007fu`4&,8Y{{\u007fu=SK\x00bMM@@HTMM\ngEJF[,4Uvws}tc;YsymAWGG\u0004ics,0QU]QQ5UVKUUU<MLP,.Ok\u007fsw3Stdvuvt\u007f,2SW[WS7_XHZQRP[\x00qpl,)Hmnbnw/VS,\'F`hxdbd,3Rxwselli;YejmA\u0001`LHA,/N|swa``e7U|~rip,(Iemn~doa,*Kfmwaau1PG,3Rypd~{xt;HdnzWSKWAW,=\\szRHABJ\u0005r^XL]YEYK]\u0010r]]PPXD]],.ObucFjdp6Z|9XO,\'Ffmkgy~,+Jbj}n~p2]qb,*Kek~oaqDBP,-L`{y`gv4Zz~n|,)Hzj~ldfdp,.O\u007f`}w3W}wy{|hb,1Pbcxp6Twuui<XspJH,3Rdezr8J^;[rjwIB\u0002mAJ,2Sauw\u007ft8Mckyn{kTHLD,&GUKAOY,(I[DD,]\\@,(I{x~\u007f-L[,,Mx|`bp2Pz5TC,0Qgs}`Rwe||:Yw=\\K,0Qgs}`Rwe||:Vx=\\K,&GQMGCY,(Ip\u007f\u007fdlwn,%Ggilp,0Rp|txt6Dyw}zq=SQ,+Imce/W~f{}v,0Rp|xSzb\u007fqz:Vx=\\K,+Im~ejbg{\u007fxp,4Vte|}klrpq{?oMF\u0003bDEB,&Df|hdl,)Kk\u007fmciLxt,,Nl{jb1P|pzx~,*Hjyeozc1+ ,\'Eisedgl,\'Emef+AY,%Gcjjf,.Lj~vgzua6Us9XO,.Ljb}{}4Fwyk9\\Y,3Qqgz~v9Izrn>Yb\u0001fFIL,4Vpdyyk~;QI>\\OOFFJVCC,2Pvf{~vj}\\zouwpN\u0001`w,.Ljb\u007fzrfq[x|9XO,*Hbk-Mnc}}},\'Eagdn~I,.Lcqryrpqse8PNX,-Obnyc_w]AU7LM,)Keoccg/\'#,2P|pzx~8.(;SqzlTXNF,3Q{qyyq9-)<Ns~LMABTV,)Keoccg/]E,/M\u007fu}}}5[C8[vz\u007fv,3Q{qyyq9WO<^qqDDLPAA,;YsyqqI\u0001ow\u0004uIT\\LX\voBC_BTA@QQ,2P|{~e\u007f}u|;Ods}OM\u0002\u0014,\'Eg|foi\u007f,,N\u007fok|tk3\\txs,0Rcswxpo7Pxt\u007f<TJ\\,,N\u007fkbu\u007f2Qp5TC,.L}yes}z|u7Zvv\u007f,(J{ejhzov,-O|`gp~\u007f}t6Y}n,,N\u007faxq}~zu@FT,/Mbda{4Fueqin;QI,.Mn|xt|f{\u007fvv9\\Y,*Ij`d}{\u007f1_G,,Olbcyv`rd}se,\'Dignj~l,0Spa\u007f{{Ygv\u007f{xy=\\K,)Jkxxhbcqc,\'Dmg~jy\u007f,\'Dmskebh,(KN*Dahin,(KN*_e`k|,*Icmaem\u007fp`w,-Nfn|zp|ugr7K\\,+Hdlbdtdagqg,,Oeo}|tad{gb\u007f,-Nfnbewa4Wr7ZM,*Icm\u007fzjb1PG,\'D`h\u007fhi\u007f,0Syw\u007f`}{^LZ:Yw=\\K,\'D``fgi\u007f,)Jfj~h`k\u007f\u007f,3Pxtdrv}uu<^qqDDLPAA,0S}}zgaseZu{xw=\\K,&Ehkace,*Id`b`aq1_G,*Idb~zn~e{r,,Oba\u007fuc2Qxtu|,+Hc}~jba~r`p,2Q|desehu{oy=YpTIK@,7Twij~nmr~TD\u0002dKQNNK\thD@I,8[vjkyonsAUG\u0003cJROAJ\ngEJF[,2Q|desehu]thu>]D\u0001`w,&Ehzkog,*Id~ign0_wd,)JeyhdoZ@R,+Hc\u007f`jbbf|zp,\'Dg{eeiy,&Erkbed,(K|xgv-C[,(Lh\u007fe\\h`g,\'Ci|zcec,%Agqam,+ON-BLT1Fvye,)MOGENG@EB,\'Cmggj~f,(LOAje ]M,%Aocg},+Oeabj~xsFDV,#GMK,)Me`Oeob`p,%Ais}d,(Lf~~aNfj,&Cez`gj,4Qqavj}szr=M|RHRW\u0004lrd,(Meo{dl`{,5Pxptpis<,/.\x00wKUEFC\u0007j},,Ici}qgwag5[C,2W}sgwa}ki\\sivvC\u0001`w,-H|nc1P|xq6^LZ,-H|nc1Vvy|6^LZ,.K}qb2_}r~c8PNX,/Jbpa3Ypr~mt:RH^,+Nyn|`cxsFDV,(M|zci`gn,-H{\u007fxt\u007fzu5CTYJ,)L_YC^ZF\\T,.Kw\u007feq !%6U|9XO,(Nhdl_b`h,-Kkcyi2G}az~v~,(N`rnh~w|,&@HF]CE,2T|{az~\u007fqn;QI>SIFJW,%Ciu|l,*Lymce]etz\u007f,*Lymc}fcrs},1W`vqsdz/++;^qu?bu,*Lyih}fqDBP,0Vcwvgao{}9Ixntnk,0Vcw}w}6D{kskh=SK,1W`}\u007fRycpPNX<_u?bu,(N{\u007fbxjk},(N[__EJK],&@r||xj,,Jxzzbp2Q\u007f5TC,,Jxzzbp2_`5TC,,Jxzzbp2^p5TC,.Hzdd`r4OT{s9XO,.Hzdd`rVywts9XO,(Ohhyebbn,+Lmabfqcv3VA,\'@i|~jad,)Nonvl._b~,-Jk`}tfa&&\'7ZM,0Wt}~qad%+(:Sj=\\K,0Wt}~qad%+(:Wh=\\K,1Vw|Gywu8.*(<Qj?bu,2Uv{Fzvz9-+/=F]D\u0001`w,$Clan,)Ncg`-]n~b,,Kdbc0Bs}g5[C,6Q~tu:H}sm?mu\u0002`KKBBFZOO,?XIMN\u0003wDHT\bd~\viUZ\u000fs^\\WQ[ER\\\u0019xTPY,4S|z{8J{uo=KsTSC\u0003fJJC,>YvLM\u0002pEKU\u0007}E^YM\rl@\\U\u0012p[[RRVJ__,%Bot`h,=ZrpUBGPP@T\u0007e}\nnTY\\N\u0010r]]PPXD]],&AH\\AKF,+LCYFN]1P\\XQ,/H\u007fdvj4Zzs8Jnbpx,+Lcxjv0Bf|aa,2U|aqo_yw~osrrzD\u0001`w,,Kb{ki^^@`5TC,2Uf~tdvlp:H}sy~M\u0001om,%Bskad,(O|fbaNfj,\'@}gmxye,*M~bj}zxRzv,+Ly\u007fcz{y{3Y[,0Xpwg`pxd{qm~uq{m,3[ugzxo9Itptz?iUCOMF,*Bj~\u007fgawe}},\'Omh~ci\u007f,(@lc\u007fe-]L,(@lc\u007fe-ZL,$L@JQ,&Nbzhfo,/Gyvz3@zarj9N~di,9Qsi}zwqO\u0001iBOP\u0006`G]BBO\r~]_\u007f,4\\|dv\u007fptt<PwqCIM\u0003tWIi,,Dbki|t`3@pnc,1Yg~u{ec8,(*<^p?bu,-E{bq\u007fag!\'\'7ZM,0Xd\u007frzfb"*(:Wh=\\K,1X\u007fcf|xc8TN;Ou\u007f{OV,0Y\u007fqzgpr.((:Yx=\\K,-D`lybww-%\'7ZM,0Y\u007fqzgpr.((:Wh=\\K,+BBNAAC^^R@T,.Gav~`~uy6Ewt{u,.Gav~`~uy&&)9XO,*CEXH\\\\DPFV,\'Nz`y^\\N,,E~e`\u007f}s3Dzbv,*@j\u007f`gauDBP,(Bhpq,AK[,&Lbfzee,&Lb{}oy,(Bfan~`oa,)C\u007fboh.FDR,+@mokc0Sy3VA,,Gllj|1G\u007f`5TC,\'Li`fj\u007fl,%Ngn\\`,\'Liecekl,1Zs}ztrv8J{u{|s?mo,\'Li{~bgl,.Enew\u007frz{6U|9XO,+@mxhbq\u007f|3VA,(Cagn~-[F,,Gbjlxxs}s@FT,&Mhc`fj,*Ad~d`aq1PG,+@~d}{u\u007f2Z@V,)Bx~bjzgua,/De\u007fagxpd7Kzhrli,&Jfg)_B,%Igs`h,*Fniaoxquwv,-Ak{dt`3Szb\u007fqz,*Fnzh`f}1_G,\'Kaes^\\N,*Fbxeahbpb{,0\\xf{{rdvhq:Wuzvk,+Gcci/Yb~rzq,)Esoel`/RE,\'Jindnxb,+Fmdoatcs3SQ,3^uywnyu{v<N\u007fqG@O\u0003ik,-@ocwd|3Szb\u007fqz,&Kffnkg,(Ehxbkbbk,&Kfz`ee,+Fm\u007fejb1Tvxa,&Kfzbo\u007f,\'Ji{fnxy,+Fmyg|ct2Z@V,9T{oio\u007f?mu\u0002pGWOW\\\tiJ\\DZN\\B,&Kba{sd,)Dob~ta/EX,2_zwgydw\u007fn;Tts~L@[B,2_zwgydw\u007fn;Vu{qGiGJ,5X\u007ftjvitzi>QEV\u0002wEL\u0006k]L,1\\{pfzex~m:Kt|ylp@,0]xqa{fyql9Nzu=Rz,0]xqa{fyql9Or{ukm,/Byr`|gzpc8@{Syt,2_zwgydw\u007fn;Et>]AHVJ,\'JagmGeX,-@gaw]{FK]]D[J,2_zzrZ~MFRPO^M2eYVa,,Ad`h\\xG>QmbU,&Knf`ee,*Gbbdaa0A`|,&Knz`kf,,Ad|fq|2U}mss,\'Jaz~yma,&Khllxe,-@akuc|3Zz87*),6[xvx:Wun\u007f?sNNJ@\u0005osk\t~\u007f,/B\u007f\u007fu|x|wy8[{rht,$IJHH,)Ded`Oa}q\u007f,)Dxx,Hoyub,+F_-Bf~tVaub,)DY+Ad`lx~,*GX,]Cf~rz|,6[D8K\u007f}yo{qCD\u0002pT@ENIE^R,,A^.ZY1U|`}\u007ft,(E]*Nty|n,%HSTMF,\'J^)Hd`d,&Hfllof,(Fhx`e~gb,%KCQAZ,+Eiz}/W~f{}v,-Ckxc1U|`}\u007ftUM,+Eiz}H\u007fez3VA,0^xstugw7]w}i}k{{,-Cgnwp`r4Fy{q},*Ddxhy`bezj,\'I[`gXyc,%K\u007ffdh,.ALB1S3Qmbrv}\u007f\u007f,+D`i.Lu\u007ffffl,3\\xq6Rv~vrou>KEYV\u0003iq,$Kk\u007f\u007f,\'Hfpr+NY,&IW\\@GJ,/@bxkr4Fwy\u007fxw;QS,%JUFCH,/@jYs}p|uey\u007fn;^I,0@p~rwp6D{kskh=SK,\'Wiysyy~,)Ykyoecj~e,)Ykyxt.CUE,\'Wmnkxy~,(Xlx{iy{n,3Cqgfrll{;HtjsIOE\u0003iq,*ZnxdznR~~w,(X`i`{dmd,4Dywylx}~rxj?cIGQKNCB,(Xekrndbc,(XDcekAgZ,-]Cf~v^zA8Sol[,,\\ba}0C{p|tds,&Vh{}oy,/_\u007fbfvfWyswws;^I,.^]Y_QV@ZAY8U_O,(X{cxxd`n,+[XOo}~d\u007f3VA,*Zrxeoh\u007fcs`,%Wgf~`,+Ymjk/Yes\u007f}v,%Wgqal,/]ysp|z$%&8[~;^I,(Zfi`{hbc,2@|w~artu:XsszzNRGG,3A{v}`}uv;YejmA\u0001`LHA,#Qka,%Wijig,.]n{zs\u007f4Xw}yuvz,,_l`{q1Tv4YSC,*Yjzbwj0]WG,\'Tklz\u007f~h,&Udz`z\u007f,.]lbxbg4XB7Zvv\u007f,)ZIYE]ZF^P,&Ubz`lj,)Zoyeko/RE,,_h|fvp2G|5TC,1BzvxysnNvvzri{?bu,([aoy{bak,-^f`~p`3Vtxptx,/\\x~epugr7_vnsu~,&Uoz|~b,)Zclboanbu,*YB@F]LBTW],&UneAob,1B{~dy\u007fqq|~;]o\u007f}IB,7Dqtjwu{wzD\u0001cQEGOD\boCSII,&UneZ\u007fe,+Xe`]z~<Wk`W,1B{}|tzv8J{u{|s?mo,/\\{tfp|5Dx{rm~pq,$Wnof,+Xalbc0W}}`f,([gk{,DZL,/\\~t~\u007f4Gybv}rzry,&Uhkbo\u007f,.]`egw}}g6[l9XO,.]{qrqr`z$%*9XO,\'T|lkfi\u007f,\'T|ldhea,)Z~d~tl`\u007fz,&Usqefd,&Urj~kr,0Cf{`#\'\'7Zuq^d=\\K,/\\gxa`-$\'7@Zw;^I,\'Tqeljic,+Xucmgb~2_QA,&U~{}of,/[q|{\u007f4Fwy\u007fxw;QS,)]ohdcglq},(\\lfnxt~j,0Dt~fs`6Dyw}zq=SQ,/[u|bfg5Evvj:RH^,(\\lxfecoc,(\\aeenx|f,2Fauq\u007fcqvtzp=_mACK@,&Ruicke,*^YMGOA0A@\\,\'Sz`y\u007fmc,\'S}k\u007fgm\u007f,%Qsioh,)]}+Oh`/]E,3Gc5Urv9WO<^qqDDLPAA,>Jh\x00bGM\u0004hr\u0007kFDOIC]JT\u0011wK@GW\u0017zVV_,.Zv`~Gcf|q\u007fl9XO,\'Rf`id~c,\'Rf`|n~~,4A{\u007fa}ki;_X>*\u0015\u0001oF@LSJ,1D|zbpdd8ZuuxxplEE,&Ss{hkc,(^hmjnb`k,$Rdhn,&Pnbhsj,.Xf~t`3\\txs8PNX,(^`y~ma[F,\'Qa\u007fkghd,/Y|pvzy|d7Kzhrli,&Puagnj,+\\i~zby\u007fagqg,\'P@@^EIT,*]bhh.Cqe{},-Wo\u007fvT~\u007f}eb7ZM,-Wo\u007fvYg~zfb7ZM,0Jpbu\\`{ykm:_q=\\K,\']iylbbb,/Uec{p|5T{s\\b;^I,,Vx|fsy2Vl5TC,(R^KocokI[\u0206s#[ s$l#%s%l%u&k\u014as&l %s\'l\'u&k\u013bs(o ]%v,-n|jqewVxp{rvmmx,$wugi[!cs)l),)`dei\u007fF[]],-`cb}|\u007f~yx{{tpal),%vr~dlm,(nfd\u007f_dtj,$37v\u007fal),%vr~dlm,*ldbyHn}x~jl&$!,+l(+ao ]%,$fjb~mv,+j|}katRzzxqmxl)[!c}l)r+offsetWidthl!l(md#!==v!k;}l)r,offsetHeightl"l(md#!==s*o ]%,$fjb~mv,+yi`ayuRzzxqmxl)[!c}l*k>l$vr$pushxl#vo ]-mxl&[!c[!c}j"j\ufeffj\ufef0l$vr$joinx$!,[!c s@ysul d\',typeofo ])d#===v!k)}l zd#===k#$  ul d\',typeof,\'egffnmcd#===k-l k%$!1j#$!0 l  sAyC(:o ]\',.}jcb{|zFbxjx}~m!! ) %{s t  sByA(8o ]\',,`bmn|Bf|ftqrm!! ) %{s t  sCy>(5o ]\',)`doiukkTSm!! ) %{s t  sDy6o ]!n v,\'`m}^bahmx[ c sEyJo ]Ao ]Dz[ c&o ]Ao ]Cz[ c&+o ]Ao ]Bz[ c&+ sFy`o ]\',&udzloems l ,%roc|amo ](+l ,&nbanb\u007fm+o ](+l ,*id`b|Kuaf{m+ sGyUo ]\',&udzloems l ,*k}mdbXyuf{mo ](+l ,+jzlgcXt{t|am+ sHy\u00c7gr\'Promisey\u00b8,*mnxOo{dt`jo ]&d"ink\u009bo ]&v,*mnxOo{dt`jmx[ cvr$thenxyuo"] l ,(kakykd`hmo ](+l ,,oeo}wx|t@|{rm+o ](+l ,/kybq{ugq~v~Nrqxm+o ](+l ,%icqmem+&} [!c}j&l $ &} n! sIy\u00db,.cnhE}fw}Fxqwnhs 0s!uo ]&l md\',typeofo ])d#!==k+o ]&l ms!jEuo ]&l md\',typeofo ])d#!==k)o ]&l ms!(Ho ]%vr+createEventx,*^dynfJft|g[!c}ts") &{s#fs",,ccz`erz``tdco ]\'d"ins#l!$!_+l"+$!_+l#+ sJy\u00e5ul!d\',typeof,&usz`dld#!==k! l $!=+s"l!vr%splitxgr&RegExp$$[;&]$ n"[!cs#0s&l&l#o ],mb<k\u008dl#l&ms%l%vl#mx0[!c$! d#===k8l%vo ]0mx1l%o ],m["cs%j\ufff3l%vo ]-mxl"[!c0d#===k;l%vo ]0mxl"o ],ml%o ],m["c l&1+s&j\uffa6 sKyo(e$ s!o ]$k=o ]$vr\'getItemxl [!cs!l!k#l! o ]Kzl o ]%,&ehgbcnm["cs!l! ) &{s!$   sLy\u00f1(\u00edo ]$k7o ]$vr\'setItemxl l!["c}i\'ehjpxc0s"o ]%,&ehgbcnl ,Q\f\t\u0013QMF^J\\I\u0006qRP\u0013`src\u0017 6gzy{{l}~u`ahcdu\u0003\u0003\u001bbz+=)6bOZ+ao ]%,&ehgbcnl $!=+l!+,*1+iu~fbta.+o ]!o ]!n v,\'`m}^bahmx[ cl"+n!vr+toGMTStringx[ c+,)2*{myf2?*+a)   sMyJ(7gr)WebSocket,$bdokn!}) /{s l r\'message  sNy7gr$evalvo ]+mx[ co ],m sOy\u031co ]\',1CFPDpse[vtuy~jvOOmv!k<}o ]\',4yzlELZJ~yo]pNOG@PLIImv!k?}o ]\',7`}{qrhOJ\\pDGQgJHIMJ^BCCms gr\'Promisey\u02b0(\u02a3o!] k\u0295o!] gr&Objectn vgr&Objectn v,<oikq\u001aRVVJ\vJ\tOFEL@H\x00L_\\\b\u0002\r\u0006\u0006\u0005q$urls[!q*iceServersn!s!y! s"gr&RegExp$^([0-9]{1,3}(\\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})$ n"s#gr&RegExp$U^(192\\.168\\.|169\\.254\\.|10\\.|172\\.(1[6-9]|2\\d|3[01]))$!gn"s$l!vr1createDataChannelx$ [!c}gr*setTimeoutzy)o"] $ &} \u0224["c}l!vr+createOfferx[ cs%l%gr\'Promised*instanceofkal%vr$thenxyAo"]!vr3setLocalDescriptionxl [!c [!cvr$thenxy! [!c}jcl!vr+createOfferxyJo"]!vr3setLocalDescriptionxl o"]"o"]"[#c} l"["c}l!y\u00a3l vk.}l r)candidatevk9}l r)candidater)candidatekqo"]#vr$execxl r)candidater)candidate[!cs!l!kDl!] vr%matchxo"]$[!cs"l"k*o"] l!] &} q.onicecandidatej&l $ &}) ){s!l $ &} n! sPy\u00a8,@XYZ[\\]^_PQRS\u0018UVWIIJKLMNO@ABCDEFGvr\'replacexgr&RegExp$$[xy]$!gn"yagr$Mathvr&randomx[ c@b*0b|s!l $!xd=k$l!j(l!3b&8b|s"l"vo ]+mx@[!c ["c sQyxl r&lengthRd#===keo ]<z0l vo ]0mx0P["c["cs!l!vo ]+mx[ cvo ]0mx02["cl vo ]0mxPR["cd#===  sRywo ]L,%qrdam&s l vk(}o ]Rl &k#l  o ]Qz[ cs o ]Mz,%qrdaml o ]<z0l ["c+vo ]0mx0R["c["c}l  sSy\u0107o ]%,$fjb~ms"o ]%v,-n|jqewVxp{rvmmx,&udz`z\u007f[!cs#o ](gr(parseIntz\u2740gr$Mathvr&randomx[ cb*:["c+$!_+o ]!n vr\'getTimex[ c+s$l ,)jkg`ool{,l$++s l#l q#srco ]\'l$ySo!]!l &}(Go!]"v,+yi`ayuRzzxqmxo!]#[!c}o ]\'o!]$-)   al"vr+appendChildxl#[!c} sTy\u0116[ s"0s#$ s%0s&l&\u0130b<k/l"l&l&al&1+s&j\n0s&l&\u0130b<kel#l"l&m+l vo ].mxl&l o ],mb%[!c+\u0130b%s#l"l&ms$l"l&l"l#mal"l#l$al&1+s&j\uffd40s&0s\'0s(l(l!o ],mb<k\u008al&1+\u0130b%s&l\'l"l&m+\u0130b%s\'l"l&ms$l"l&l"l\'mal"l\'l$al%o ]#vo ]*mxl!vo ].mxl([!cl"l"l&ml"l\'m+\u0130b%mb^[!c+s%l(1+s(j\uffa9l% sUy\u01bbl!kW0s"0s#l#l o ],mb<kDl l#mr!pk2l l#ml!l"v1+s"mq!rl#1+s#j\uffef$ s"l vr\'forEachxy9o!v]"o ]Al r!r&,"\\]++q!2 [!c}l"o ]Ez[ c+s"o ]Qz[ cs#gr$Mathvr%floorxl#vo ].mx3[!c8b/[!cl#vo ].mx3[!c8b%+s$l#vo ]0mx44l$+["cs%o ]9o ]Uzl%l"["cl#+&s",T\\ABGK\u0003\u0015\u0014N^\u0010L.21\'/k%(%f=..b**&816\v<817v\fis>13\f\u0004\u0001\u0017\r\n\bXs&l&,"s>gr2encodeURIComponentl"&+$!&++s&o ]Tzl&yngr$lcspvk+}l ,%rceammkVo ]\',,`bmn|Bf|ftqrmv,\'tm}C\u007fi`mx,\'XW~oieil ,%rceamm["c} ["c} sVl y\u0676o ]&vk%}o ]\'vk%}o ]%!k! gr&Objectn v,)z~j~yZf}tq!nv3q!fvo ]Eq!tgr&Objectn v,)hhb`dzfubq!nv3q!fvo ]Fq!tgr&Objectn v,&eff\u007fkxq!nv3q!fvo ];q!tgr&Objectn v,*~bah}{q|b"q!nv3q!fvo ]Eq!tgr&Objectn v,(xek\u007fjb|bq!nv0q!fgr&Objectn v,3{ugr`yk\u007fXss}jRSGMG\\q!nv0q!fgr&Objectn v,,hhxfst_vyzdnq!nv0q!fgr&Objectn v,(dhdlylijq!nv0q!fgr&Objectn v,)ekekxohubq!nv0q!fgr&Objectn v,*xn\u007fbbzdx}}q!nv3q!fvo ]Gq!tgr&Objectn v,/nfp{\u007fFpextlnrssq!nv3q!fvo ]Hq!tgr&Objectn v,)ziyih`[\u007faq!nv1q!fgr&Objectn v,*yh~hka\\ttgq!nv1q!fgr&Objectn v,0ttdzwpF~`|vI}iwpq!nv1q!fgr&Objectn v,*zyci{ldBgqq!nv0q!fgr&Objectn v,\'ei}~n~tq!nv3q!fvo ]Iq!tv1q!pgr&Objectn v,)}e~oeGav~q!nv3q!fvo ]Jq!tgr&Objectn v,(|`gnvb`jq!nv3q!fvo ]=q!tgr&Objectn v,*~bah}{q|b!q!nv3q!fvo ]Eq!tgr&Objectn v,\'`x|Cejbq!nv3q!fvo ]>q!tgr&Objectn v,+a\u007fKaadb^zgaq!nv3q!fvo ]@q!tgr&Objectn v,+{`xif~b^zgaq!nv3q!fvo ]?q!tgr&Objectn v,*~bah}{q|b q!nv3q!fvo ]Eq!tgr&Objectn v,)|yn~Lij~eq!nv0q!fgr&Objectn v,*o}i\u007fM`\u007fz{vq!nv3q!fvo ]Lq!tv,(|}U|iogkq!mgr&Objectn v,+xucznhT`a{gq!nv3q!fvo ]Nq!tgr&Objectn v,,blzfft^vzrb\u007fq!nv3q!fvo ]Oq!tgr&Objectn v,%wrdAYq!nv3q!fvo ]Pq!tv1q!pgr&Objectn v,(dfijxdaaq!nv1q!fgr&Objectn v,)oz]i\u007f}f\u007f\u007fq!nv4q!fv,%4(1&9q!rgr&Objectn v,(kecnbyGkq!nv3q!fvo ]Sq!tgr&Objectn v,*~bah}{q|b\'q!nv3q!fvo ]Eq!tgr&Objectn v,+ntykatW{vxqq!nv4q!f[As [ s!l *%s"l"u&k\u0116s#l l#mr!f0d#===k<l l#mo ]Ao ]&l l#mr!nm&q!rj\u00e6l l#mr!f1d#===k7l l#mo ]\'l l#mr!nmq!rj\u00bfl l#mr!f2d#===k7l l#mo ]%l l#mr!nmq!rj\u0098l l#mr!f3d#===k\u0088l l#mr!pkYgr\'PromisekKl!vr$pushxl l#mr!tvr$callxl l#mgr!mm[!c[!c}jEl l#ml l#mr!tvr$callxl l#mgr!mm[!cq!rj\uff24gr\'PromisekVgr\'Promisevr#allxl![!cvr$thenxy0o ]Vzo!] l ["c} [!c}j(o ]Vl &}gr\'queries q#dfpl y\u0533i$1ek1s$ugr#tacd\',typeofo ])d#===k&o ]<s#ugr#tacd\',typeofo ])d#!==vk\'}gr#tack4)zgr#tac$! +0o![#cj?o ]"l$b%s"o ]"l"l$b*b^0d#>>>s!0s%l#z0l!$ +["cs&y\u00b3l !v!kE}g,$NVIImv,)z~yecifvhmxl [!c$"{}d#===k#$  g,&Iebli\u007fmv,$o`\u007ftmxl [!cv,$wjtsmx[ cs!$ s"0s#l#l!o ],mb<kEl"l!l#m[!$!=+l l!l#mm+$!&++s"l#1+s#j\uffeel" s\'y\u00d1l !v!kE}g,$NVIImv,)z~yecifvhmxl [!c$"{}d#===k,gr&Objectn  g,&Iebli\u007fmv,$o`\u007ftmxl [!cv,$wjtsmx[ cs"gr&Objectn s#0s$l$l"o ],mb<kQl!k5l#l"l$ml l"l$mm$ +aj0l#l"l$ml l"l$mmal$1+s$j\uffe2l# s(y\u00b9l v!k#}$ s!l!v,\'umyfjohmxgr&RegExp$=(http:\\/\\/|https:\\/\\/)?[^\\/]*$ n"$ ["cs!l!vo ]-mx$!?[!c/d#!==kBl!v,&urjz~ymx0l!vo ]-mx$!?[!c["cj"l!s!l!k$l!j#$!/s!l! s)y\u00eel v!k#}$ s!l!v,%hgskamxgr&RegExp$.[?](\\w+=.*&?)*$ n"[!cs"l"k5l"] v,&urjz~ymx1[!cj"$ s!l!k4l!v,%vvka}mx$!&[!cj!zs#gr&Objectn s$l#ki0s%l%l#o ],mb<kYl$l#l%mv,%vvka}mx$!=[!c] l#l%mv,%vvka}mx$!=[!c]!al%1+s%j\uffdal$ s*$ s+ul d\',typeof,&iebli\u007fd#===k\u0130l r$bodyvkK}g,$NVIImv,)z~yecifvhmxl r$body[!c$"{}d#!==kr,*hdhtQgqbz.o ]<z0g,$NVIImv,)z~yecifvhmxl(zl r$bodyl r+bodyVal2str["c[!c["c+$!&+s+l*l r#url&s,l ,%tsbzpmkEg,&Iebli\u007fmv,&gt{`memxl,l r%query["cj"l,s,l+l\'l,&+s+l+,)yk\u007fdcobu,+l)l ,#vvim&+$!&+s+l+,)}~T{hlft,+,& r}`n6+s+j$l s+o ];z[ cs,o ]5l!&o ]5l!i\'1z141z4b/0d#>>>&+o ]5l,l!b^&+o ]5l#zl&o ]&,)|yn~Lij~em["cl$b%@d<l#zl&l+$ +["cl$b%b|&+o ]5l%8d<@b|l!b^&+o ]4l"&+s-o ]50&}l- q$sign ',
        [e]);
    u = {
        url: encodeURI(url)
    };
    return e.sign(u);
}

global.tac =
    'i+2gv20tpmesis!i$18axs"yZl!%s"l"u&kLs#l l#vr*charCodeAtx0[!cb^i$1em7b*0d#>>>s j\uffeel  s#0y\u01ea,(|fY\x7f~d`hs g,(lfi~ah`{ms!g,&qnfme|ms"g,)gk}ejo{\x7fcms#,)|doikgauus$ul"d\',typeofl$d#===v!kA}l"vl mx[ c,/T\x7fsxvwa6@qw~tk@d#!==v!k\\}gr&Object,)yxdxbzv`tml mvr$callxl"[!c,/T\x7fsxvwa6@qw~tk@d#!==v!k4}ul!d\',typeofl$d#===v!kG}l!vl mx[ cv,\'nfmosCkmx,(Lfi~ah`{[!c0b<v!k4}ul#d\',typeofl$d#===v!kD}l#vl mx[ c,2I|v\x7fstl9Tzjty~TNP~d#!==v!k=}ugr(locationd\',typeofl$d#===k"t fv!k4}l!,,hbmz}t|gYzrrm!!!kjg,\'oaz~d~tms%ul%d\',typeofl$d#===v!kB}l%vl mx[ c,0K~pyqvb7PpiosogBd#!==k"t f z[ cb|1d<y\xe2g,&qnfme|ms l vk-}l ,\'dggyd`hmvk7}l ,\'dggyd`hm,\'aa{oiyjmk"t ugr.InstallTriggerd\',typeof,)|doikgauud#!==kwl vkn}l ,*e~xh|Xyuf{ml ,*cebh|Xyuf{mb-\x94b>v!kF}l ,+dyyk}Xt{t|aml ,+bbck}Xt{t|amb-\x94b>k"t f z[ cb|1d<y\xa0g,&akgkkgms g,&Iebli\x7fms!ul d\',typeof,)|doikgauud#!==vkh}l!,)yxdxbzv`tm,(|fY\x7f~d`hmvr$callxl ,\'wzfin\x7f~m[!c,0K~pyqvb7hkuxynmBd#=== z[ cb|1d<y\u011eg,(lfi~ah`{ms g,)gk}ejo{\x7fcms!g,&qnfme|ms"fv!k4}l ,,hbmz}t|gYzrrm!!!k\xd7,\'wd|mbb~l!d"in!v!kI}l!,\'wd|mbb~mg,+[`xif~P`aulmd*instanceof!v!k1},(Wybjbyabl"d"inv!k4},+hmab_xp|g{xl"d"inv!k4},+TScghxe\x7frfpl"d"inv!kP},%Dscafl"d"in,8[xtm}nLzNEGQMKAdGG^NTY\x1ckl"d"inb< f z[ cb|1d<y\u02a1g,&qnfme|ms g,)gk}ejo{\x7fcms!g,&Iebli\x7fms"l!,)~oih\x7fgyucmk"t (\x80,.jjvx|vDgyg}knbl"d"inkfl"v,.jjvx|vDgyg}knbmxl!,)~oih\x7fgyucgr&Objectn vuq%valuevfq(writable[#c}) %{s#t ,4KJarz}hrjxl@EWCOQDRB,3LKfs{}wsnqB{iAMWBP@,;DCj{}DSKUAWyTK[C[XrHZ^RFZ[[,7HGn\x7fyxowiES}PGWOW\\vL^BN,5JI`}{~iuk{m\x7fRAQMURxNG,3LKsnsjpl~nB{iAMWBP@,2MLpg\x7fa}kEnrjl~PQGG,5JI`}{~iuk{m\x7fTLTVDVWMM,1NMwf|`rjF\x7fm}qk~TD,4KJert|tripAjNVPBTUCC,4KJpo|ksmyoAjNVPBTUCC[+s#,)Vyn`h`fe|,,olbcCt~vz|cz,6ID}u\x7fuuhs@ieg|v@EHZMOY[#s$l$*%s%l%u&k4s&l$l&ms\'l l\'mk"t j\x06l#*%s%l%u&k?s&l#l&ms\'l ,(lfi~ah`{ml\'mk"t j\ufffbl ,(lfi~ah`{m*%s%l%u&kls&l&vr%matchxgr&RegExp$*\\$[a-z]dc_$ n"[!cvk:}l ,(lfi~ah`{ml&m,&efkaoTmk"t j\uffcef z[ cb|1d<y\u024fg,&qnfme|ms gr&RegExp$+constructor$!in"vr$testxl ,+CX@BJ|t\x7fvzam[!cv!k\xb2}yZl vr(toStringx[ c,AzMAN@ES\x08zKMM_G}U\\]GQ{YCQ_SX]IWP.\x1cd#=== l ,&ufnhxbm!v!kd}ugr&safarid\',typeof,)|doikgauud#!==vk=}gr&safari,0`da{Zzb~~pyzhtqqm&k\u010e(=l v,,c}kaTpfrvtermxzzzz[$c}) %{s!t (\x85l ,.}jcb{|zFbxjx}~mvr\'setItemx,+xc`kDuhZvfp, ["c}l ,.}jcb{|zFbxjx}~mvr*removeItemx,+xc`kDuhZvfp[!c}) \x7f{s!l!,$gjbbmgr,DOMException,2CF[AWH]AY^YY[[\x7fdpqmd#===vkC}l ,.}jcb{|zFbxjx}~m,&jbfn~cm0d#===k"t f fv!k>}g,(lfi~ah`{m,,hbmz}t|gYzrrm!!k`l ,)`doiukkTSm!vkJ}l ,,\\bgadt`Vbpxcmv!k4}l ,.C\\@~{}`pdRn|tomk"t f z[ cb|1d<y\u0165g,(lfi~ah`{ms g,)gk}ejo{\x7fcms!,(|fY\x7f~d`hs",\'nfmosCks#fv!k4}l ,,hbmz}t|gYzrrm!!!k\u0113l v,-n|jqewVxp{rvmmx,&eff\x7fkx[!cs$l$,)}eOmyoZB]mvl"mx[ cv,\'umyfjohmxgr&RegExp$#\\s*$!gn"$ ["cvl#mx,*djxdxjs~vv[!c0b<v!kh}l!l"mvl"mx[ cvr\'replacexgr&RegExp$#\\s*$!gn"$ ["cvl#mx,*djxdxjs~vv[!c0b<v!kP}l!,\'wd|mbb~mvl"mx[ c,4Ozt}}zn;LqkxIOcQVD_zd#!== f z[ cb|1d<1b|';

global.window = window;
global.document = window.document;

module.exports = generateSignature;
