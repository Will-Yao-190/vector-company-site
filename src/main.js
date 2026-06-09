import React, { useState } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";

const h = React.createElement;

const services = [
  {
    tag: "Rent",
    title: "Property Rentals",
    text: "From property positioning and tenant screening to daily operations, we help owners turn real estate assets into steadier cash flow.",
    points: ["Rent Strategy", "Tenant Leads", "Maintenance", "Cash Flow"],
  },
  {
    tag: "Flip",
    title: "Flipping",
    text: "We focus on acquisition, renovation budgets, contractor coordination, and resale timing so each project has a practical value-add plan.",
    points: ["Deal Review", "Renovation Budget", "Project Oversight", "Resale Plan"],
  },
  {
    tag: "Tax",
    title: "Tax Sale Opportunities",
    text: "We evaluate tax sale and related distressed property opportunities with careful due diligence, title review, and bidding discipline.",
    points: ["Lead Sourcing", "Title Review", "Risk Checklist", "Bid Strategy"],
  },
];

const steps = [
  {
    title: "Understand the Asset",
    text: "We start with location, property condition, tax records, rental potential, and exit strategy so each opportunity can be judged with clear numbers.",
  },
  {
    title: "Build the Plan",
    text: "For rentals, flips, or tax sale opportunities, we map the budget, timeline, partners, and risk boundaries before execution begins.",
  },
  {
    title: "Execute with Discipline",
    text: "We break property operations, renovation progress, document follow-up, and investment milestones into clear next actions.",
  },
];

function Header() {
  return h(
    "header",
    { className: "site-header" },
    h(
      "a",
      { className: "brand", href: "#top", "aria-label": "Vector home" },
      h("span", { className: "brand-mark" }, "V"),
      h("span", null, "Vector")
    ),
    h(
      "nav",
      { className: "nav-links", "aria-label": "Main navigation" },
      h("a", { href: "#services" }, "Services"),
      h("a", { href: "#approach" }, "Approach"),
      h("a", { href: "#contact" }, "Contact")
    )
  );
}

function Hero() {
  return h(
    "section",
    { id: "top", className: "hero" },
    h("div", {
      className: "hero-media",
      "aria-hidden": "true",
      style: { backgroundImage: 'url("./public/vector-real-estate-hero.jpg")' },
    }),
    h(
      "div",
      { className: "hero-overlay" },
      h(
        "div",
        { className: "hero-content" },
        h("p", { className: "eyebrow" }, "Real Estate Operations & Investment"),
        h("h1", null, "Vector"),
        h(
          "p",
          { className: "hero-copy" },
          "Vector helps property owners and investors manage rentals, flipping projects, and tax sale opportunities with a clearer operating process."
        ),
        h(
          "div",
          { className: "hero-actions" },
          h("a", { className: "button button-primary", href: "#contact" }, "Book a Consultation"),
          h("a", { className: "button button-secondary", href: "#services" }, "View Services")
        ),
        h(
          "dl",
          { className: "hero-metrics" },
          h("div", null, h("dt", null, "Rental Operations"), h("dd", null, "Cash Flow")),
          h("div", null, h("dt", null, "Flipping"), h("dd", null, "Value Add")),
          h("div", null, h("dt", null, "Tax Sale"), h("dd", null, "Due Diligence"))
        )
      )
    )
  );
}

function ServiceCard({ service, index }) {
  return h(
    "article",
    { className: "service-card" },
    h(
      "div",
      { className: "service-card-top" },
      h("span", { className: "service-number" }, String(index + 1).padStart(2, "0")),
      h("span", { className: "service-tag" }, service.tag)
    ),
    h("h3", null, service.title),
    h("p", null, service.text),
    h(
      "ul",
      null,
      service.points.map((point) => h("li", { key: point }, point))
    )
  );
}

function Services() {
  return h(
    "section",
    { id: "services", className: "section services-section" },
    h(
      "div",
      { className: "section-heading" },
      h("p", { className: "eyebrow" }, "Three Core Businesses"),
      h("h2", null, "Three services across the real estate asset cycle"),
      h(
        "p",
        null,
        "Vector brings rental cash flow, renovation upside, and tax sale opportunities into one practical framework so each project has a defined goal, rhythm, and risk boundary."
      )
    ),
    h(
      "div",
      { className: "service-grid" },
      services.map((service, index) => h(ServiceCard, { service, index, key: service.title }))
    )
  );
}

function Approach() {
  return h(
    "section",
    { id: "approach", className: "section approach-section" },
    h(
      "div",
      { className: "approach-copy" },
      h("p", { className: "eyebrow" }, "How Vector Works"),
      h("h2", null, "Due diligence first, execution second"),
      h(
        "p",
        null,
        "Real estate value often lives in the details: rent range, repair cost, holding period, title records, and exit price. Vector makes those details visible before capital and time are committed."
      ),
      h("a", { className: "text-link", href: "#contact" }, "Discuss Your Project", h("span", { "aria-hidden": "true" }, " ->"))
    ),
    h(
      "div",
      { className: "steps" },
      steps.map((step, index) =>
        h(
          "article",
          { className: "step", key: step.title },
          h("span", null, String(index + 1).padStart(2, "0")),
          h("div", null, h("h3", null, step.title), h("p", null, step.text))
        )
      )
    )
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return h(
    "section",
    { id: "contact", className: "section contact-section" },
    h(
      "div",
      { className: "contact-panel" },
      h(
        "div",
        { className: "contact-copy" },
        h("p", { className: "eyebrow" }, "Start With Vector"),
        h("h2", null, "Tell us about your real estate project"),
        h(
          "p",
          null,
          "Whether you are operating a rental property, evaluating a flip, or reviewing a tax sale opportunity, Vector can help you clarify the next step from goals, budget, and timeline."
        ),
        h(
          "div",
          { className: "contact-meta" },
          h("div", null, h("span", null, "Email"), h("strong", null, "hello@vector.example")),
          h("div", null, h("span", null, "Focus"), h("strong", null, "Rentals / Flipping / Tax Sale"))
        )
      ),
      h(
        "form",
        { className: "contact-form", onSubmit: handleSubmit },
        h("label", null, "Name", h("input", { type: "text", name: "name", placeholder: "Your name" })),
        h("label", null, "Contact", h("input", { type: "text", name: "contact", placeholder: "Phone or email" })),
        h(
          "label",
          null,
          "Project Type",
          h(
            "select",
            { name: "service", defaultValue: "Property Rentals" },
            h("option", null, "Property Rentals"),
            h("option", null, "Flipping"),
            h("option", null, "Tax Sale Opportunities"),
            h("option", null, "General Consultation")
          )
        ),
        h(
          "label",
          null,
          "Project Overview",
          h("textarea", {
            name: "message",
            rows: "4",
            placeholder: "City, property type, budget, or the issue you want to solve",
          })
        ),
        h("button", { className: "button button-primary", type: "submit" }, "Send Request"),
        submitted && h("p", { className: "form-status", role: "status" }, "Received. Vector will follow up to review the project details.")
      )
    )
  );
}

function App() {
  return h(
    React.Fragment,
    null,
    h(Header),
    h("main", null, h(Hero), h(Services), h(Approach), h(Contact)),
    h(
      "footer",
      { className: "site-footer" },
      h("span", null, "Vector"),
      h("span", null, "Real Estate Rentals / Flipping / Tax Sale")
    )
  );
}

createRoot(document.getElementById("root")).render(h(App));
