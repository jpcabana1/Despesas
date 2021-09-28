import { Injectable } from '@angular/core';

import {
  faThumbtack,
  faExchangeAlt,
  faMale,
  faMoneyBillWaveAlt,
  faDollarSign,
  faPaw,
  faUtensils,
  faSeedling,
  faBaby,
  faMedkit,
  faPlus,
  faDumbbell,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { CategoriaEnum } from 'src/app/Enums/categoria-enum.enum';

@Injectable({
  providedIn: 'root',
})
export class IconeService {
  constructor() {}
  categorias: any[] = [
    faThumbtack,
    faExchangeAlt,
    faMale,
    faMoneyBillWaveAlt,
    faDollarSign,
    faPaw,
    faUtensils,
    faSeedling,
    faBaby,
    faMedkit,
    faPlus,
    faDumbbell,
  ];

  icons: any[] = [
    faThumbtack,
    faExchangeAlt,
    faMale,
    faMoneyBillWaveAlt,
    faDollarSign,
    faPaw,
    faUtensils,
    faSeedling,
    faBaby,
    faMedkit,
    faPlus,
    faDumbbell,
    faSave,
  ];

  selectIcon(name: string): any {
    switch (name) {
      case CategoriaEnum.faThumbtack:
        return faThumbtack;
      case CategoriaEnum.faExchangeAlt:
        return faExchangeAlt;
      case CategoriaEnum.faMale:
        return faMale;
      case CategoriaEnum.faMoneyBillWaveAlt:
        return faMoneyBillWaveAlt;
      case CategoriaEnum.faDollarSign:
        return faDollarSign;
      case CategoriaEnum.faPaw:
        return faPaw;
      case CategoriaEnum.faUtensils:
        return faUtensils;
      case CategoriaEnum.faSeedling:
        return faSeedling;
      case CategoriaEnum.faBaby:
        return faBaby;
      case CategoriaEnum.faMedkit:
        return faMedkit;
      case CategoriaEnum.faPlus:
        return faPlus;
      case CategoriaEnum.faDumbbell:
        return faDumbbell;
      case CategoriaEnum.faSave:
        return faSave;
      default:
        return faDollarSign;
    }
  }
}
