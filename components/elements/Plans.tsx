import { CheckIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';
import { classNames } from '../../utils/classnames';
import { SectionTitle } from '../components/SectionTitle';

export interface Plan {
  id: string;
  featured: boolean;
  title: string;
  consultantCount: number;
  ptCount: number;
  bulletPoints: string[];
  description: string;
}

interface Props {
  plans: Plan[];
}

export function Plans({ plans }: Props): JSX.Element {
  return (
    <div
      id="plans"
      className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl pt-16 sm:pt-24 lg:pt-32"
    >
      <SectionTitle
        h2="Leistungspakete"
        subTitle="Unser Review in einem Paket"
        desription="Durch transparent geschnittene Pakete erhalten Sie beste Leistung zu einem absehbaren Preis."
      />
      <div
        className={`mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-${Math.min(
          plans.length,
          4
        )} lg:gap-x-8 lg:gap-y-8`}
      >
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={classNames(
              'relative p-8 bg-white border rounded-2xl shadow-sm flex flex-col',
              plan.featured ? 'border-red-500' : 'border-gray-200'
            )}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.title}
              </h3>
              {plan.featured ? (
                <p className="absolute top-0 py-1.5 px-4 bg-red-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  Am beliebtesten
                </p>
              ) : null}
              <div className="mt-4 flex justify-between text-gray-900">
                <p className="flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan.consultantCount}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    Consultants
                  </span>
                </p>
                <p className="flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan.ptCount}
                  </span>
                  <span className="ml-1 text-xl font-semibold">PT</span>
                </p>
              </div>
              <p className="mt-6 text-gray-500">{plan.description}</p>

              <ul role="list" className="mt-6 space-y-6">
                {plan.bulletPoints.map((item) => (
                  <li key={item} className="flex">
                    <CheckIcon
                      className="flex-shrink-0 w-6 h-6 text-red-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href={`/contact?plan=${plan.id}`}>
              <a
                className={classNames(
                  plan.featured
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-red-50 text-red-700 hover:bg-red-100',
                  'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                )}
              >
                Kontakt aufnehmen
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}