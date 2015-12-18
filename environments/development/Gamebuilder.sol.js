"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Gamebuilder = (function (_Pudding) {
    _inherits(Gamebuilder, _Pudding);

    function Gamebuilder() {
      _classCallCheck(this, Gamebuilder);

      _get(Object.getPrototypeOf(Gamebuilder.prototype), "constructor", this).apply(this, arguments);
    }

    return Gamebuilder;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Gamebuilder.abi = [{ "constant": false, "inputs": [], "name": "create_game", "outputs": [{ "name": "", "type": "address" }], "type": "function" }];
  Gamebuilder.binary = "606060405261116c806100126000396000f3606060405260e060020a600035046342909a9e8114601a575b005b603e600080606061110580610067833901809050604051809103906000f092915050565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f3606060405260cb8054600160a060020a031916331790556110e1806100246000396000f3606060405236156100cf5760e060020a600035046310bb67cd81146100d157806312c8052f146100e65780631d1d15d4146100ff57806337c390e31461012a5780633e470af8146101b257806348db5f89146101e2578063697b817c1461020257806372a69a92146102fe5780637eaef50c146103115780637f98121a14610329578063a01bc72914610336578063b2596a6714610366578063be600276146103ab578063c368109c1461045c578063cfd611751461048b578063e604cf9f14610498578063fecdd6d914610517575b005b61052b60ca54640100000000900461ffff1681565b61054360ca546901000000000000000000900460ff1681565b61052b60043560028160a0811015610002575060108083048201549206026101000a900461ffff1681565b6100cf6004355b60ca54600090600290603060020a900461ffff1660a0811015610002576010808204830180549190920683026101000a61ffff0219169055600391508260a08110156100025760108082048301929106026101000a81548161ffff021916908302179055508060ca60066101000a81548161ffff0219169083021790555050565b61052b600435608a816103e881101561000257506010808304919091015491066002026101000a900461ffff1681565b61055560ca546a01000000000000000000009004600160a060020a031681565b60408051604435600481810135602081810280860182019096528185526100cf958335956024803596606495929491019282918501908490808284375094965050505050505060ca80546a010000000000000000000084027fffff0000000000000000000000000000000000000000ffffffffffffffffffff9091161790556000805482518083558280527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639182019160208501821561058d579160200282015b8281111561058d578154835173ffffffffffffffffffffffffffffffffffffffff1990911617825560209290920191600191909101906102c3565b61052b60ca5462010000900461ffff1681565b61054360ca5468010000000000000000900460ff1681565b61052b60ca5461ffff1681565b61052b600435604b816103e881101561000257506010808304919091015491066002026101000a900461ffff1681565b610555600435600080548290811015610002575080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630154600160a060020a031681565b6100cf60043560ca546000906a01000000000000000000009004600160a060020a03908116903316811415610bf9578261ffff166000148015610405575060ca546010603060020a90910461ffff90811691909106168214155b1561067f5760ca54603060020a900461ffff1660001901915061067f825b60008060028360a081101561000257601080820483015491069091026101000a900461ffff169150818114156107f1576107f183610131565b61052b600435600c816103e8811015610002575060108083049091015491066002026101000a900461ffff1681565b61052b60015461ffff1681565b6105726114006040519081016040528060a0905b60008152602001906001900390816104ac575050604080516114008101918290529060029060a090826000855b82829054906101000a900461ffff16815260200190600201906020826001010492830192600103820291508084116104d95790505050505050905090565b61052b60cb5460a060020a900461ffff1681565b6040805161ffff929092168252519081900360200190f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b604051808261140080838184600060046101eff15093505050f35b506105c09291505b808211156105ee57805473ffffffffffffffffffffffffffffffffffffffff19168155600101610595565b50508261ffff16600014156105f25760ca805461ffff1916600f1763ffff000019166296000017905561063c565b5090565b8261ffff16600114156106215760ca8054602d61ffff19919091161763ffff000019166232000017905561063c565b60ca805461ffff1916601e1763ffff00001916626400001790555b60ca805465ffff000000001916640100000000179055610bf960005b6000600060006000610cd36110b2600c60025b808211156105ee576000815560010161066b565b8261ffff1660011480156106ab575060ca546010603060020a90910461ffff9081169190910616600f14155b156106cc5760ca54603060020a900461ffff1660010191506106cc82610423565b8261ffff1660021480156106ee575060ca54600f603060020a90910461ffff16115b156107105760ca54603060020a900461ffff16600f1901915061071082610423565b8261ffff166003148015610732575060ca546090603060020a90910461ffff16105b156107535760ca54603060020a900461ffff16601001915061075382610423565b610bf960008080805b60c95461ffff85161015610bfe57600c606485016103e8811015610002576010808204909201549190066002026101000a900461ffff16600014610ca957608a606485016103e88110156100025760ca54601080830490930154918390066002026101000a90910461ffff9081169550603060020a90910481168290068116918506161115610c045760001983019150610c0b565b8161ffff166002141561084c576001805460005461ffff9182169092011614156108825760ca805468ff00000000000000001916680100000000000000001769ff000000000000000000191669010000000000000000001790555b8161ffff16600414156108975760ca80546201000080820461ffff16601e010263ffff0000199190911617905561089783610131565b6001805461084c9161ffff9190911601610658565b8161ffff16600514806108ae57508161ffff166006145b156108e35760cb805475ffff0000000000000000000000000000000000000000191660a060020a84021790556108e383610131565b60638261ffff161115610bf95760ca546109009061ffff16610b42565b60cb5490915060a060020a900461ffff16600614156109265760646019820261ffff1604015b61ffff8116600c836103e8811015610002576010808204909201549190066002026101000a900461ffff1611610b5f576000600c836103e881101561000257601080820490920180549290910660029081026101000a61ffff021990921690558460a08110156100025760108082048301929106026101000a81548161ffff02191690830217905550610bf960ca8054600a6201000064010000000080840461ffff90811660010190910265ffff0000000019949094169390931761ffff19811690841683810401178181049093169182049091010263ffff00001991909116179055565b610ca984606401825b600060028260a081101561000257601080820483015491069091026101000a900461ffff16811415610aed5760006002608a856103e88110156100025760108082049092015491900682026101000a900461ffff1660a0811015610002576010808204830180549190920683026101000a61ffff02191690558491508360a08110156100025760108082048301929106026101000a81548161ffff0219169083021790555081608a600050846103e88110156100025760108082049092019190066002026101000a81548161ffff021916908302179055505b60028260a081101561000257601080820483015491069091026101000a900461ffff1660031415610bf957610b9e604b846103e8811015610002576010808204909201549190066002026101000a900461ffff165b600a60088202046064602a43600019014006909202919091040190565b80600c836103e8811015610002575060108085049091018054919094066002026101000a80820461ffff90811693909303810292021916179091555050565b60cb5490915060a060020a900461ffff1660051415610bc55760646019820261ffff160490035b60ca5461ffff82811662010000909204161161108d5760ca805468ff00000000ffff00001916680100000000000000001790555b505050565b50505050565b6001830191505b60ca54603060020a900461ffff908116908416118015610c2f575060108361ffff16115b15610c3f5750600f198201610c45565b50601082015b60ca54601061ffff8581168290068116603060020a909304811691909106161415610c7757610ca98460640182610a14565b60ca54601061ffff8581168290048116603060020a909304811691909104161415610cb557610ca98460640183610a14565b6001939093019261075c565b60024360001901400660001415610a0b57610ca98460640183610a14565b6001805461ffff191686179055600080548690811015610002578180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301909054906101000a9004600160a060020a0316935083600160a060020a0316632030f7216040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505060405151935060009250505b828261ffff161015610e5b5783600160a060020a0316631d5a9f3f836040518260e060020a028152600401808261ffff1681526020019150506020604051808303816000876161da5a03f1156100025750506040805180517fc13afa9100000000000000000000000000000000000000000000000000000000825261ffff8616600483015291519192600292909163c13afa9191602482810192602092919082900301816000876161da5a03f11561000257505060405151905060a08110156100025760108082048301929106026101000a81548161ffff0219169083021790555060019190910190610d6d565b83600160a060020a031663c4bd8ebc6040518160e060020a0281526004018090506020604051808303816000876161da5a03f1156100025750506040515160c95550600091505b60c95461ffff8316101561106757816064019450845083600160a060020a031663c0576b73836040518260e060020a028152600401808261ffff1681526020019150506020604051808303816000876161da5a03f11561000257505060405151915085905060028260a08110156100025760108082048301929106026101000a81548161ffff0219169083021790555080608a600050866103e88110156100025760108082049092019190066002026101000a81548161ffff0219169083021790555083600160a060020a031663c368109c836040518260e060020a028152600401808261ffff1681526020019150506020604051808303816000876161da5a03f115610002575050604051519050600c866103e88110156100025760108082049092019190066002026101000a81548161ffff0219169083021790555083600160a060020a031663a01bc729836040518260e060020a028152600401808261ffff1681526020019150506020604051808303816000876161da5a03f115610002575050604051519050604b866103e88110156100025760108082049092019190066002026101000a81548161ffff0219169083021790555060019190910190610ea2565b505060ca805467ffff0000000000001916905550506002805461ffff1916600317905550565b60ca80546201000080820461ffff168490030263ffff00001991909116179055505050565b506110bf604b600c61066b565b506110cc608a604b61066b565b506110d960c9608a61066b565b50600060c95556";

  if ("0x9bc6602ac7b1aaba48875506fe4c7461431a820f" != "") {
    Gamebuilder.address = "0x9bc6602ac7b1aaba48875506fe4c7461431a820f";

    // Backward compatibility; Deprecated.
    Gamebuilder.deployed_address = "0x9bc6602ac7b1aaba48875506fe4c7461431a820f";
  }

  Gamebuilder.generated_with = "1.0.2";
  Gamebuilder.contract_name = "Gamebuilder";

  return Gamebuilder;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Gamebuilder = factory;
}