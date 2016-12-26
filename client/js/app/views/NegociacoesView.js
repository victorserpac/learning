'use strict';

System.register(['./View', '../helpers/DateHelper'], function (_export, _context) {
  "use strict";

  var View, DateHelper, _createClass, NegociacoesView;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_View2) {
      View = _View2.View;
    }, function (_helpersDateHelper) {
      DateHelper = _helpersDateHelper.DateHelper;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('NegociacoesView', NegociacoesView = function (_View) {
        _inherits(NegociacoesView, _View);

        function NegociacoesView() {
          _classCallCheck(this, NegociacoesView);

          return _possibleConstructorReturn(this, (NegociacoesView.__proto__ || Object.getPrototypeOf(NegociacoesView)).apply(this, arguments));
        }

        _createClass(NegociacoesView, [{
          key: 'template',
          value: function template(model) {
            return '\n      <table class="table table-hover table-bordered">\n        <thead>\n          <tr>\n            <th onclick="negociacaoController.ordena( \'date\' )">DATA</th>\n            <th onclick="negociacaoController.ordena( \'amount\' )">QUANTIDADE</th>\n            <th onclick="negociacaoController.ordena( \'value\' )">VALOR</th>\n            <th onclick="negociacaoController.ordena( \'volum\' )">VOLUME</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          ' + model.negociacoes.map(function (n) {
              return '\n              <tr>\n                <td>' + DateHelper.dataParaTexto(n.date) + '</td>\n                <td>' + n.amount + '</td>\n                <td>' + n.value + '</td>\n                <td>' + n.volum + '</td>\n              </tr>\n            ';
            }).join('') + '\n        </tbody>\n\n        <tfoot>\n          <td colspan="3"></td>\n          <td>\n            ' + model.volumeTotal + '\n          </td>\n        </tfoot>\n      </table>\n    ';
          }
        }]);

        return NegociacoesView;
      }(View));

      _export('NegociacoesView', NegociacoesView);
    }
  };
});
//# sourceMappingURL=NegociacoesView.js.map