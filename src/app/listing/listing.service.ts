import { Injectable } from '@angular/core';
import { Listing } from '../listing/listing';
import { parseString } from 'xml2js'
import { Observable, of } from 'rxjs';
import { debug } from 'util';
import { Title } from '@angular/platform-browser';
import { load } from '@angular/core/src/render3';

@Injectable({
    providedIn: 'root'
})
export class ListingService {

    listings: Listing[] = [ ];

    constructor() {
        this.loadData();
    }

    private loadData():any {
        // this.addListing('title', 'description')
        let listings: Listing[] = this.listings
        parseString(this._xml, function (err, result) {
            if(err) {
                console.debug("ERROR: " + err)
            }
            console.dir(result.rss.channel[0].item);
            const data = result.rss.channel[0].item
            for (const item of data) {
                const listing = new Listing()
                listing.title = item.title
                listing.description = item.description
                listing.link = item.link
                listings.push(listing)
            };
            // return result.rss.channel[0].item;
        });
    }

    // addListing(title: String, description: String) {
    //     let listing = new Listing()
    //     listing.title = title
    //     listing.description = description
    //     this._Listings.push(listing)
    // }

    getListings(): Observable<Listing[]> {
        return of(this.listings);
        // return await this.loadData();
    }

    _xml = `
  <rss xmlns:cf="http://www.microsoft.com/schemas/rss/core/2005" xmlns:e="http://www.ebay.com/marketplace/search/v1/services" version="2.0">
    <channel>
        <cf:listinfo>
            <cf:group ns="http://www.ebay.com/marketplace/search/v1/services" label="listing format" element="ListingType" data-type="number"/>
            <cf:group ns="http://www.ebay.com/marketplace/search/v1/services" label="option" element="PaymentMethod" data-type="number"/>
            <cf:sort ns="http://www.ebay.com/marketplace/search/v1/services" label="List Order" element="ListOrder" data-type="number"/>
            <cf:sort ns="http://www.ebay.com/marketplace/search/v1/services" label="No of bids" element="BidCount" data-type="number"/>
            <cf:sort ns="http://www.ebay.com/marketplace/search/v1/services" label="Current auction price" element="CurrentPrice" data-type="number"/>
            <cf:sort ns="http://www.ebay.com/marketplace/search/v1/services" label="Buy It Now price" element="BuyItNowPrice" data-type="number"/>
            <cf:sort ns="http://www.ebay.com/marketplace/search/v1/services" label="Listing end time" element="ListingEndTime" data-type="number"/>
        </cf:listinfo>
        <title> </title>
        <link>#</link>
        <subtitle>Customize as you please by changing the URL. The keyword before the .atom / .rss extension determines the result that is displayed</subtitle>
        <item>
            <title>VINTAGE FRANKOMA POTTERY PAIR OF HUNTING DOG BOOKENDS DESERT SAND RARE</title>
            <description>
                <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123759281082&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs3.ebaystatic.com/m/me5J1xA_sFKCZaVO2XPxBDA/140.jpg' border='0'/></a></td><td><strong>$49.99</strong> (0 Bids)<br>End Date: Sunday May-12-2019 15:00:01 PDT<br>Buy It Now for only: $79.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123759281082&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123759281082&vectorid=229466&lgeo=1' target='_blank'>Bid now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123759281082%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-08T00:39:38.000Z</pubDate>
<guid>123759281082</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123759281082&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount>0</e:BidCount>
<e:CurrentPrice>49.99</e:CurrentPrice>
<e:ListingType>AuctionWithBIN</e:ListingType>
<e:BuyItNowPrice>79.99</e:BuyItNowPrice>
<e:ListingEndTime>2019-05-12T22:00:01.000Z</e:ListingEndTime>
<e:ListOrder>123759281082</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Muck The Original Boot Company Green Corduroy Womens Boots Size 9</title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123754149223&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs4.ebaystatic.com/m/ml1hu3sjUADs_bk6gFts28Q/140.jpg' border='0'/></a></td><td><strong>$49.99</strong><br>End Date: Saturday Jun-1-2019 17:58:28 PDT<br>Buy It Now for only: $49.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123754149223&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123754149223%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-03T13:05:03.000Z</pubDate>
<guid>123754149223</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123754149223&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>49.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-06-02T00:58:28.000Z</e:ListingEndTime>
<e:ListOrder>123754149223</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Pyrex Circa 50s Milk Opal Glass Pie dish plate Gold Stripe in Mint Condition</title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123757556035&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs4.ebaystatic.com/m/m5rAT3K8PVOCn1f88xGEV-A/140.jpg' border='0'/></a></td><td><strong>$14.99</strong> (0 Bids)<br>End Date: Sunday May-12-2019 17:53:16 PDT<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123757556035&vectorid=229466&lgeo=1' target='_blank'>Bid now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123757556035%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-06T12:53:23.000Z</pubDate>
<guid>123757556035</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123757556035&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount>0</e:BidCount>
<e:CurrentPrice>14.99</e:CurrentPrice>
<e:ListingType>Auction</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-05-13T00:53:16.000Z</e:ListingEndTime>
<e:ListOrder>123757556035</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Retro Vintage Elegant Libby Smokey Grey Glass Goglets Set of 8  </title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123757505487&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs4.ebaystatic.com/m/mJBOiD_3qi8jyXVeLH7A04A/140.jpg' border='0'/></a></td><td><strong>$29.99</strong><br>End Date: Tuesday Jun-4-2019 16:40:10 PDT<br>Buy It Now for only: $29.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123757505487&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123757505487%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-06T11:40:30.000Z</pubDate>
<guid>123757505487</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123757505487&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>29.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-06-04T23:40:10.000Z</e:ListingEndTime>
<e:ListOrder>123757505487</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Vintage Quilt Pattern Appliqued Bouquets Flowers 74" x 90" </title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123754183825&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs2.ebaystatic.com/m/mWnO-Kt4ujyFrWAPu6fUGKA/140.jpg' border='0'/></a></td><td><strong>$8.99</strong><br>End Date: Saturday Jun-1-2019 18:51:59 PDT<br>Buy It Now for only: $8.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123754183825&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123754183825%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-03T13:54:58.000Z</pubDate>
<guid>123754183825</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123754183825&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>8.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-06-02T01:51:59.000Z</e:ListingEndTime>
<e:ListOrder>123754183825</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Vintage MWW 1991 WovenThrow Blanket Nursery Alphabet 34 x 50 Mint Condition</title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123757466189&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs2.ebaystatic.com/m/mzjAMKPMEEwPpwe4QFwAUjg/140.jpg' border='0'/></a></td><td><strong>$39.99</strong><br>End Date: Tuesday Jun-4-2019 16:03:02 PDT<br>Buy It Now for only: $39.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123757466189&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123757466189%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-06T11:03:07.000Z</pubDate>
<guid>123757466189</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123757466189&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>39.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-06-04T23:03:02.000Z</e:ListingEndTime>
<e:ListOrder>123757466189</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Beautiful Talbots Genuine Leather Tan Tote Shoulder Hand Bag Purse</title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123754587425&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs2.ebaystatic.com/m/m8wZIGZHVPoHLX4Am59cPZQ/140.jpg' border='0'/></a></td><td><strong>$69.99</strong><br>End Date: Sunday Jun-2-2019 4:59:50 PDT<br>Buy It Now for only: $69.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123754587425&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123754587425%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-03T23:59:59.000Z</pubDate>
<guid>123754587425</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123754587425&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>69.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-06-02T11:59:50.000Z</e:ListingEndTime>
<e:ListOrder>123754587425</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Vintage Royal Haeger bud vase pitcher RG92 Speckled Blue Matt Finish</title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123754068119&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs4.ebaystatic.com/m/mzps_EhWFXRlgd-5PAxtTVg/140.jpg' border='0'/></a></td><td><strong>$12.99</strong><br>End Date: Saturday Jun-1-2019 15:54:57 PDT<br>Buy It Now for only: $12.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123754068119&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123754068119%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-03T10:55:07.000Z</pubDate>
<guid>123754068119</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123754068119&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>12.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-06-01T22:54:57.000Z</e:ListingEndTime>
<e:ListOrder>123754068119</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Retro Vintage Citrus Orange Lime Lemon glass tray plate gold rim mint condition</title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123757549166&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs3.ebaystatic.com/m/mljiw_iLXuJYtywYipVqxaA/140.jpg' border='0'/></a></td><td><strong>$9.99</strong><br>End Date: Tuesday Jun-4-2019 17:41:07 PDT<br>Buy It Now for only: $9.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123757549166&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123757549166%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-06T12:41:08.000Z</pubDate>
<guid>123757549166</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123757549166&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>9.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-06-05T00:41:07.000Z</e:ListingEndTime>
<e:ListOrder>123757549166</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Beautiful Vintage Retro Afgan Chrocheted Chevron Boho Blanket Hand Made 53 x 97</title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123757443911&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs4.ebaystatic.com/m/m3JPHsHmXU41NRi6IXwT9Yw/140.jpg' border='0'/></a></td><td><strong>$49.99</strong><br>End Date: Tuesday Jun-4-2019 15:26:37 PDT<br>Buy It Now for only: $49.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123757443911&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123757443911%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-06T10:26:38.000Z</pubDate>
<guid>123757443911</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123757443911&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>49.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-06-04T22:26:37.000Z</e:ListingEndTime>
<e:ListOrder>123757443911</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Vintage Canadian Goose Duck Stuffed Pillow Perfect Condition Collectible</title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123751408758&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs3.ebaystatic.com/m/mx6JtbPKjKO263Lf5F8TRbw/140.jpg' border='0'/></a></td><td><strong>$14.99</strong><br>End Date: Thursday May-30-2019 4:49:41 PDT<br>Buy It Now for only: $14.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123751408758&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123751408758%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-04-30T23:49:41.000Z</pubDate>
<guid>123751408758</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123751408758&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>14.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-05-30T11:49:41.000Z</e:ListingEndTime>
<e:ListOrder>123751408758</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Amish Heritage Collection Dezendorf Best Friends Limited Edition Hand signed 94</title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123756384143&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs4.ebaystatic.com/m/m3mrNIl1gUcsMUbbYU7sY-Q/140.jpg' border='0'/></a></td><td><strong>$24.99</strong><br>End Date: Monday Jun-3-2019 19:39:26 PDT<br>Buy It Now for only: $24.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123756384143&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123756384143%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-05T14:39:30.000Z</pubDate>
<guid>123756384143</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123756384143&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>24.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-06-04T02:39:26.000Z</e:ListingEndTime>
<e:ListOrder>123756384143</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>TRADE WINDS BANANA TREE COLLECTION BY SIDDHIA HUTCHINSON BY ANDREA SADEK</title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123751406221&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs2.ebaystatic.com/m/m3LqqeDqm2a5C3KTSmOSEyA/140.jpg' border='0'/></a></td><td><strong>$79.99</strong><br>End Date: Thursday May-30-2019 4:45:37 PDT<br>Buy It Now for only: $79.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123751406221&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123751406221%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-04-30T23:45:37.000Z</pubDate>
<guid>123751406221</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123751406221&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>79.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-05-30T11:45:37.000Z</e:ListingEndTime>
<e:ListOrder>123751406221</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Vintage Gorge Good Message Mug Cup Office Work Bored at Work Paper Work</title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123754099904&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs1.ebaystatic.com/m/mdhZ38lX61HVcPu6N93sUSg/140.jpg' border='0'/></a></td><td><strong>$14.99</strong><br>End Date: Saturday Jun-1-2019 16:31:53 PDT<br>Buy It Now for only: $14.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123754099904&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123754099904%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-03T11:32:08.000Z</pubDate>
<guid>123754099904</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123754099904&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>14.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-06-01T23:31:53.000Z</e:ListingEndTime>
<e:ListOrder>123754099904</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Miam Miam Flora Champagne Mug Collectible Mint Condition</title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123754165387&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs4.ebaystatic.com/m/mtD7yLy0Aqyvzccr8oeDf3Q/140.jpg' border='0'/></a></td><td><strong>$14.99</strong><br>End Date: Saturday Jun-1-2019 18:15:38 PDT<br>Buy It Now for only: $14.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123754165387&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123754165387%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-03T13:21:22.000Z</pubDate>
<guid>123754165387</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123754165387&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>14.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-06-02T01:15:38.000Z</e:ListingEndTime>
<e:ListOrder>123754165387</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Vintage Teal Pink Salmon blanket throw 55 x 66 with satin trim binding</title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123757450749&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs2.ebaystatic.com/m/mTj1bCAXMIohv7SfiYzvmeQ/140.jpg' border='0'/></a></td><td><strong>$49.99</strong><br>End Date: Tuesday Jun-4-2019 15:39:59 PDT<br>Buy It Now for only: $49.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123757450749&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123757450749%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-06T10:40:01.000Z</pubDate>
<guid>123757450749</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123757450749&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>49.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-06-04T22:39:59.000Z</e:ListingEndTime>
<e:ListOrder>123757450749</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
<item>
    <title>Vintage Genuine Rozetta Doll Amsterdam Holland w tag wood clogs and hat 50s</title>
    <description>
        <![CDATA[<table border='0' cellpadding='8'><tr><td><a href= 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123756433303&vectorid=229466&lgeo=1' target='_blank'><img src='http://thumbs4.ebaystatic.com/m/mnRFtr3a75PBlXLknqZLscQ/140.jpg' border='0'/></a></td><td><strong>$9.99</strong><br>End Date: Monday Jun-3-2019 20:16:57 PDT<br>Buy It Now for only: $9.99<br><a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10039&campid=5338536258&item=123756433303&vectorid=229466&lgeo=1' target='_blank'>Buy It Now</a> |<a href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&toolid=10039&campid=5338536258&vectorid=229466&lgeo=1&mpre=http%3A%2F%2Fcgi1.ebay.com%2Fws%2FeBayISAPI.dll%3FMfcISAPICommand%3DMakeTrack%26item%3D123756433303%26ssPageName%3DRSS%3AB%3ASRCH%3AUS%3A104' target='_blank'>Add to watch list</a></td></tr> </table>]]>
</description>
<pubDate>2019-05-05T15:17:01.000Z</pubDate>
<guid>123756433303</guid>
<link>http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&amp;toolid=10039&amp;campid=5338536258&amp;item=123756433303&amp;vectorid=229466&amp;lgeo=1</link>
<e:EekStatus></e:EekStatus>
<e:BidCount></e:BidCount>
<e:CurrentPrice>9.99</e:CurrentPrice>
<e:ListingType>FixedPrice</e:ListingType>
<e:BuyItNowPrice></e:BuyItNowPrice>
<e:ListingEndTime>2019-06-04T03:16:57.000Z</e:ListingEndTime>
<e:ListOrder>123756433303</e:ListOrder>
<e:PaymentMethod>PayPal</e:PaymentMethod>
</item>
</channel>
</rss>
`

}

