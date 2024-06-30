import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const WavingHandSVG = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="32" height="32" fill="url(#waving-hand-pattern)" />
      <defs>
        <pattern
          id="waving-hand-pattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#waving-hand-image" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="waving-hand-image"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC/VBMVEUAAACqezzHeg9oaGjWixJubm7Dcw7Jew/RhQzmoR6+bArNgAxra2vBcQrRhQ++bQllZWW+bAjKegu6ZwhoaGfgmBZsbGy8agjnoyDckhLCcQpra2tubm7JegptbW1qamq+awhmZmZpaWm5Zwlra2vEcQTsqx/MfgrVig/KewnjnBbDcghnZ2fGdQfclBTCcQjDcgnZjhBra2vdlBRsbGxsbGy/bAfwtTHLewjnoxfkoBu6ZgdnZ2fUiA/EdAhlZWXhmhRnZ2jPgw9sbGxra2vrqifglxHelhTAbQbflxNoaGjEcwjajxHLfAxpaWnnpBbnpRrfmBfqqBzmohrIeAjytjDPhBNsbGy5ZgbHdgloaGjEcwjjnRZra2vbkhTQhA1fXl5kZGS1YQdpaWnEcgfnoh7loyHZjhW6ZwfhmxzCcApgYGBgYGDhmxXHeAzVjRW7aQjelhLDcQhfX1+2ZArAbgZtbW3bkhbdkhG6aAlnZ2fqpx7jnBXdlRXmoRnakxPvsSzEdAjtripcXFznox3VjRfFdAi1YwvxtS/IfRRra2vjmhLPgxS2YQe7aAdgYGDWjhjxtjHfmRLtrivLgBTpqynPggphYWHppiHGdw27aQX/z0v/0E7/zUX/12f/zkj/yjz/01j/yz7/zED/1Fv/1V7/zEL/0lX9xTT9xzj6wjD/0VL/12T/0VD/yTn8xDL+xzb5wS//1mHwsyH/yTjxtiP0uSfztyVubm74vy3+yDz7xDT2vCr+zUr9yUHvsCLopyD7yUf4wz/loRvzuTX3viz1uijwsyfqqiHmoxH+zk/5xUT4wjvusB7knxD7xDnqqyfqqRvrqxrpqRbekwjytzLytivtrhv7xkD3vS/trSHhmxnophfclRffmBTimgz+y0T5wDXVjBPusS72uyzzuSvemBnZjQzcjQLuryfUiQ/6yk31vjr0ui/koiHjnhrjnQ71vTXglwnWhwfekAXTggPZiQJiYmL8zVTakRTNfAT0vkDflg3bkhHIdgMvPwwgAAAAm3RSTlMAAwX+CggNB/0aEf7gLfheKygeFhMTSDg0JiIe8u/YVFBOIxsO/vfz7+e/r6GalJF9Uj06Nhj+/frz7ufm4NvPzMPDwpeMi31zbmNFQTky/vny8OHe1NPOwsG6uq6qpaGKfXxuZ19USEAt9vTf3NTBraylmY+IdWda+/Xm497Rzs3KwbW1tbSmpJCMd3ZxZET76eTg4Nm2rZmH2UlRTtUAAAtPSURBVFjDtZd3eNNmEMZlO5MQIKuhgTDKLGEEKLussqFl771LaUtpgZbuvfcespAsObZkxyuOV+wsZzl7kITsPQgkBErZ0Kf3yYQsnofR9v0jzqNEP9/d997phN2/Bu/yx/4Luf56ZfRj/wlo5xuieU9gDyMXT09hR9LSnuYNEx6C0/ezde8teA5zqt9QDBM8MsC8YfmDc95rLrIn/rxfgIH8PzzSDz4e6Wme96B1ct9eG0NUZbe8eRyRHpt9ZS6qz8D+5vlD7+v2vvv2P8cXxvft2iKCYLIL1zyLgfr8KpoN9RG8au6/5z44ngu+T5zy4wJP+DVoZlwGQcio6tg5fJ0mjRbNhpiGbjMPWH7veBZMKaqKqU75CG7t8VRDQREho7mk3JcD+DJtE22GOi0fYB7tei/Qc2sSY0iCscaOehTDQs/EXYhhaLXC0LqIT/axuaL5gIDkBt8L9PT0xKIqkmQUJVsDMJ9D13KqaUpttZ1aNR5DeuTJNwZCjvPMm+9Vb++3my4UESQRlZS70AXbO6IhJTuKs1pMuXMgQqj0LtHcSRi29N4huf1SmlIdA2fFGqctEbiM8WgttGqtCoupbLsbn9wG0VIIaYN5272qtLfXucKMGKiwQj99POa75UxCvZVlWYUBuBhoj2iuP6pSz/aeEwZ4Bgi6gfy21DgKsqMojrVkvjgRC5zVGFfMUZTWkvnW0xjvS1SlPj1FuzCnAvb/9sF7Hyzo2w11YNY1R4uV07Ia2yk4ut7B5U3ZMhnF2nJH+WKgL67A2buOvjIbjACauHV4YoY9I/HHfd1Igx4vd6B0NBpb3lZP93FepQUxBMMpDAljXeDPE55/oQ94aenSSRho/Iu19vjo6PiMgp8ndgUJvgmucNQrNCzHWRxjXYZs8TjXXMWoNUmZq17DwNi7dvZpd8vbOfbotLSz8elTpu/vPH+gbMLFIypK6qxqhqCShn8pCJxVk5MRQ7EKYy4UrZM8XzrXjDhn0+0574I/2iTc/9k6VDa3Y14VsWACkqRsq/cJegdfa8qmtBrwwCjPTqCvymvjUTjp9inlX2Ht2ve9vSij/s0lLj3GeCQUFpE4TnDGNc+6H5taWpgdqdUoTCugTG1CzViaGJ0Wn25vTjy3PqhDoO8kVhFEVPHwhW5+IWfiEuNxUkZbDe/09QvxSGiJohlKY5j2Wsc2mJlgT4tOz7hQkPNdKNauidMTIR2e5BK0pQYaVsYwlAL61/tQjcOeJiYpHXLTHT0zMi49Ld5+oSWl4Sefjg27KiVDBgMoKmn4Infv9285LkTRNLLi1gCwxJSrEhXB2aDpOoAcRdHpzS2Fjppx7S5Cg6ysPpuRMTRXt/pL4YG1t0qKo6hILacrGRsQOrX0xlU5TmuMZTCbbmvZyJKimIyW+pTW4GVYBwnH3Cqpy6YZmmLrVy8RQhQlxVqtWkZYhy/ye8Xr3I00XBapMK2EseDU3samIk5XX9hUvqkH1lGBayti67IpilID6TX3vcFA4mS4HK9evcTnfY+c9GiC1uoMKxc5ScIdFYkxnKW+MKfmGNZZvR+viC1m1epINVf35nH30BEVTdnRSmkYXjz9+IFZ5QXxpAyMaZr2JU96ZmacvYqzGFPieg3qAhIiUp2Vi6RlUclrxruhPouXhIVJqkw/jA/tBe1AMBSnMU1b6CsU+PxSURBPACg2YaZ39z57HHUHJSNJZMUeUJnmq1KpRMzpf3gJgXACSqgxrXh3x4715U3paaRaZ4xtXT8E6yrh3mDILorASYY1vTMRBlvcjatKlZjk6ppywKJiIFGRGpu+LCGuIP2qHEDJsaVP9egGQh3bmlJdRSJTp8zp6/1+Tc4NuB8AVfHR/Cc8VrSsQqfLjpZLJXiUwqZvBVB3uS/ulVCYUUXIGMqaMupR1PvNiKSSSCAy6BoGTArDV03IoXhiWmMzJEBqdyOFIlIMw9A8adDaazkZ0cAJi5AqUffRNLiU1VK4JDxcKmY0Saa4kc/c/Unye6+ElGpoD0bGpWz17R3cUJueJgmD21TAQTaLjASfqsJOhIcpZWyS0fFd7+7heHq6YG7jnCQCx7nYl30Xj0hIPCsNPwHfT9BAQVLTpCT8xIkIOcFajCXlv99ls1r30b6AHuM8gBSDK+W41bE9aFxN7Vn09XJcRjkxFCUTS0/wIA5ADTvcu3DWZcQUtQx/+VF+stnToL6EIu7jz3sBKDxCoiIZJ4iiaVIeAaBwCcmBkboem+A3eF4QtK5kzkS/V86AT5RyJS6zNjWcu4FcqUQegvZRA4fBb4PwKB2ydlDn1fOjWhgjsihd5pynESnxbJoKx8mYjPRouVwpFkOpUa1p4BBiKBqApABK1nc9NsHYhBYO/pPTZb443jekBk1bHCykVKpUYuRFACExjIxUhSHQCSlOKZJT4lY92wkEkyq3zspqtVqd/q3jQSEoO3CzUiKFeCA0MCkwZDBFSZQZDxIDyJALW0/n3MY05pp0GpbVakzTl/iEeLROsUeLYY5I5cjUBC8SSQyHjxTGgxwN7c8E/28Hu8K03dRYZkhSKFgqqm7aIu8Qr4ZaOy4HT0vlYrwNAsJVUh4UzkekdzQsugNa/sLzaHfy3nRmhT5ZxzIkU7xyoffhqQ218TxIosIR4LbaQdC1Rr2jdKwA7b2DvxVgrkeubPbnSRezMm0aikCksYGHYSClQWpw+GJUeCQniK9RhATmiAlA29GOeQT2C37l4ddnn088smItLMXIqOKV25d9cq0gWsKD0MG1gVAPQ0jQa+Bskz6v9GMXfsPkd9U9IucW5hsCJJtGq6apase7T5VfqFJJACSR33aBMzIYBhERYdD9bJIhNq/0JbQYun5h7v9I2xYNGjLG43xmsk4DD6LswpxCjgADgHgU4iAQXIKEoWnUUKLMXAA5N0zzPED0mS0a7c8vB+N6VeaZdFoGNm6YJQSuBAgPUjk5fHJyiVxM0qzFlJlXVoFSc76ofOHqzJEnuYWOuJlrVKgBAiLFcmAgUhuIRFeR1WkWGiTvZOq1HUIe5Drf3H8pAj4pGt3POW+BlKzhoLFkwIFS8yA5D3KOSQYNY1ZhM5w6mVpZ07Yd9Ztn7gllEgzuKZoLXuCfcPkQk4bV0oRKCsNZDgWXOmMSkwzMN7Wa02p0NkPmydSsmyPv9NoTA8wDJqDPzaInd/YRAHPQWt7kGi0jlsL5gNAPKQoLUlLD1qtQWJJ5TuWt9b5tIHgzdJIm7XrhyodD+Q4+1Jgaa4PD42dYuFMAk8ohJI7V6Cw2kx7yOl+Zf+bzDlvNQCANRqEsP7LTeTlw08Xzp4wWlkazp02IpMQZyCrJaECcyj/zG3/qNI7gvbfnqygWV/TjtslvwjTgCGXYHRDExIMUbZz8vxq9PhdiHTVhntm8bUJ7kMiaU/NPmhSQXFh4e0gS2AE1uuQ2zmWvQ113iH7z+0OpH+u4tx6b2lhmVFAkNClCofYCO9NahQ1xsirzT1/2Otj9qeY6cK7o+YGdRt3iYCDBMMDlUtRdKB7ESYI6l2X9CZzrB4+6Y901ac+HfbqsTGsvrkhWgJ1wlRweAXD2FIs4eanngXPx+uRP/bC7SeAv6HJh0CyPFSYduJyBvoD5rwYbOjl/Ic7hIdj9KnCjV5beZuFfc8CHvA2dnEt/v/7p/XPABoen3swzGG1JFoslKdl457guDXv9qB/2IPI7evBi1im93mAw6PWZgMlCnOuTZ+x2wx5Mbl/PuJ6fejIPdLIsNQvKjNLaOEiIPagEBzYOu/RXZRbofCWPmTzjaBD2MBqy+49h1y9dPn369OWLCPPpASH2cBL4fL1xxsFhoMkzNu4OdMP+hdx8ln2ze/fXvQP9BNj/qH8A9zDp7kcay2cAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

const WavingHandIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={WavingHandSVG} {...props} />;
};

export default WavingHandIcon;
